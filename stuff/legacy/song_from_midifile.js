'use strict';

//import sequencer from './sequencer';
import getConfig from './config';
import {log, info, warn, error, base64ToBinary, ajax} from './util.js';
import parseMIDIFile from './midi_parse';
import {MIDIEvent} from './midi_event';
import {Part} from './part';
import {Track} from './track';
import {Song} from './song';

let config;

export default function createSongFromMIDIFile(data){

  if(config === undefined){
    config = getConfig();
  }

  if(data instanceof ArrayBuffer === true){
    let buffer = new Uint8Array(data);
    return toSong(parseMIDIFile(buffer));
  }else if(data.header !== undefined && data.tracks !== undefined){
    return toSong(data);
  }else{
    data = base64ToBinary(data);
    if(data instanceof ArrayBuffer === true){
      let buffer = new Uint8Array(data);
      return toSong(parseMIDIFile(buffer));
    }else{
      error('wrong data');
    }
  }
}


function toSong(parsed){
  let tracks = parsed.tracks;
  let ppq = parsed.header.ticksPerBeat;
  let ppqFactor = config.get('defaultPPQ')/ppq;
  let timeEvents = [];
  let songConfig = {
    tracks: []
  };
  let events;

  for(let track of tracks.values()){
    let lastTicks, lastType;
    let ticks = 0;
    let type;
    let channel = -1;
    events = [];

    for(let event of track){
      ticks += (event.deltaTime * ppqFactor);
      //console.log(event.deltaTime, ticks, ppq);

      if(channel === -1 && event.channel !== undefined){
        channel = event.channel;
        track.channel = channel;
      }
      type = event.subtype;

      switch(event.subtype){

        case 'trackName':
          track.name = event.text;
          //console.log('name', track.name, numTracks);
          break;

        case 'instrumentName':
          if(event.text){
            track.instrumentName = event.text;
          }
          break;

        case 'noteOn':
          events.push(new MIDIEvent(ticks, 0x90, event.noteNumber, event.velocity));
          break;

        case 'noteOff':
          events.push(new MIDIEvent(ticks, 0x80, event.noteNumber, event.velocity));
          break;

        case 'setTempo':
          // sometimes 2 tempo events have the same position in ticks
          // we use the last in these cases (same as Cubase)
          let bpm = 60000000/event.microsecondsPerBeat;

          if(ticks === lastTicks && type === lastType){
            info('tempo events on the same tick', ticks, bpm);
            timeEvents.pop();
          }

          if(songConfig.bpm === undefined){
            songConfig.bpm = bpm;
          }
          timeEvents.push(new MIDIEvent(ticks, 0x51, bpm));
          break;

        case 'timeSignature':
          // sometimes 2 time signature events have the same position in ticks
          // we use the last in these cases (same as Cubase)
          if(lastTicks === ticks && lastType === type){
            info('time signature events on the same tick', ticks, event.numerator, event.denominator);
            timeEvents.pop();
          }

          if(songConfig.nominator === undefined){
            songConfig.nominator = event.numerator;
            songConfig.denominator = event.denominator;
          }
          timeEvents.push(new MIDIEvent(ticks, 0x58, event.numerator, event.denominator));
          break;


        case 'controller':
          events.push(new MIDIEvent(ticks, 0xB0, event.controllerType, event.value));
          break;

        case 'programChange':
          events.push(new MIDIEvent(ticks, 0xC0, event.programNumber));
          break;

        case 'pitchBend':
          events.push(new MIDIEvent(ticks, 0xE0, event.value));
          break;

        default:
          //console.log(track.name, event.type);
      }

      lastType = type;
      lastTicks = ticks;
    }

    if(events.length > 0){
      songConfig.tracks.push(new Track().addPart(new Part({events:events})));
    }
  }

  songConfig.ppq = ppq;
  songConfig.timeEvents = timeEvents;
  return new Song(songConfig).update();
}