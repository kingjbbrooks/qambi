import {combineReducers} from 'redux'
import {
  CREATE_SONG,
  CREATE_TRACK,
  CREATE_PART,
  ADD_PARTS,
  ADD_TRACKS,
  ADD_MIDI_NOTES,
  ADD_MIDI_EVENTS,
  ADD_TIME_EVENTS,
  CREATE_MIDI_EVENT,
  CREATE_MIDI_NOTE,
  ADD_EVENTS_TO_SONG,
  UPDATE_MIDI_EVENT,
  UPDATE_MIDI_NOTE,
} from './action_types'

const initialState = {
  songs: {},
  tracks: {},
  parts: {},
  midiEvents: {},
  midiNotes: {},
}


function sequencer(state = initialState, action){
  switch(action.type){

    case CREATE_SONG:
      state = {...state}
      state.songs[action.payload.id] = action.payload
      break


    case CREATE_TRACK:
      state = {...state}
      state.tracks[action.payload.id] = action.payload
      break


    case CREATE_PART:
      state = {...state}
      state.parts[action.payload.id] = action.payload
      break


    case CREATE_MIDI_EVENT:
      state = {...state}
      state.midiEvents[action.payload.id] = action.payload
      break


    case CREATE_MIDI_NOTE:
      state = {...state}
      state.midiNotes[action.payload.id] = action.payload
      break


    case ADD_TRACKS:
      state = {...state}
      let songId = action.payload.song_id
      let song = state.songs[songId]
      if(song){
        let trackIds = action.payload.track_ids
        trackIds.forEach(function(id){
          let track = state.tracks[id]
          if(track){
            song.tracks.push(id)
            track.song = songId
          }else{
            console.warn(`no track with id ${id}`)
          }
        })
      }else{
        console.warn(`no song found with id ${songId}`)
      }
      break


    case ADD_PARTS:
      state = {...state}
      let trackId = action.payload.track_id
      let track = state.tracks[trackId]
      if(track){
        //track.parts.push(...action.payload.part_ids)
        let partIds = action.payload.part_ids
        partIds.forEach(function(id){
          let part = state.parts[id]
          if(part){
            track.parts.push(id)
            part.track = trackId
          }else{
            console.warn(`no part with id ${id}`)
          }
        })
      }else{
        console.warn(`no track found with id ${trackId}`)
      }
      break


    case ADD_MIDI_EVENTS:
      state = {...state}
      let partId = action.payload.part_id
      let part = state.parts[partId]
      if(part){
        //part.midiEvents.push(...action.payload.midi_event_ids)
        let midiEventIds = action.payload.midi_event_ids
        midiEventIds.forEach(function(id){
          let midiEvent = state.midiEvents[id]
          if(midiEvent){
            part.midiEvents.push(id)
            midiEvent.part = partId
          }else{
            console.warn(`no MIDI event found with id ${id}`)
          }
        })
      }else{
        console.warn(`no part found with id ${partId}`)
      }
      break


    case UPDATE_MIDI_EVENT:
      state = {...state}
      let eventId = action.payload.id
      let event = state.midiEvents[eventId];
      if(event){
        ({
          ticks: event.ticks = event.ticks,
          data1: event.data1 = event.data1,
          data2: event.data2 = event.data2,
        } = action.payload)
      }else{
        console.warn(`no MIDI event found with id ${eventId}`)
      }
      break


    case UPDATE_MIDI_NOTE:
      state = {...state}
      let note = state.midiNotes[action.payload.id];
      ({
        // if the payload has a value for 'start' it will be assigned to note.start, otherwise note.start will keep its current value
        start: note.start = note.start,
        end: note.end = note.end,
        durationTicks: note.durationTicks = note.durationTicks
      } = action.payload)
      break


    default:
      // do nothing
  }
  return state
}


const sequencerApp = combineReducers({
  sequencer,
})

export default sequencerApp
