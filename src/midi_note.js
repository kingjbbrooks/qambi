import {MIDIEvent} from './midi_event'

let instanceIndex = 0

export class MIDINote{

  constructor(noteon: MIDIEvent, noteoff: MIDIEvent){
    //if(noteon.type !== 144 || noteoff.type !== 128){
    if(noteon.type !== 144){
      console.warn('cannot create MIDINote')
      return
    }
    this.id = `${this.constructor.name}_${instanceIndex++}_${new Date().getTime()}`
    this.noteOn = noteon
    noteon.midiNote = this
    noteon.midiNoteId = this.id

    if(noteoff instanceof MIDIEvent){
      this.noteOff = noteoff
      noteoff.midiNote = this
      noteoff.midiNoteId = this.id
      this.durationTicks = noteoff.ticks - noteon.ticks
      this.durationMillis = -1
    }
  }

  addNoteOff(noteoff){
    this.noteOff = noteoff
    noteoff.midiNote = this
    noteoff.midiNoteId = this.id
    this.durationTicks = noteoff.ticks - this.noteOn.ticks
    this.durationMillis = -1
  }

  copy(){
    return new MIDINote(this.noteOn.copy(), this.noteOff.copy())
  }

  update(){ // may use another name for this method
    this.durationTicks = this.noteOff.ticks - this.noteOn.ticks
  }

  transpose(amount: number): void{
    this.noteOn.transpose(amount)
    this.noteOff.transpose(amount)
  }

  move(ticks: number): void{
    this.noteOn.move(ticks)
    this.noteOff.move(ticks)
  }

  moveTo(ticks: number): void{
    this.noteOn.moveTo(ticks)
    this.noteOff.moveTo(ticks)
  }

  unregister(){
    if(this.part){
      this.part.removeEvents(this)
      this.part = null
    }
    if(this.track){
      this.track.removeEvents(this)
      this.track = null
    }
    if(this.song){
      this.song.removeEvents(this)
      this.song = null
    }
  }
}

