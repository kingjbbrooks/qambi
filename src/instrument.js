import {getStore} from './create_store'
import {createSample} from './sample'
import {context} from './io'
import {
  CREATE_INSTRUMENT,
} from './action_types'

const store = getStore()
let instrumentIndex = 0

class Instrument{

  constructor(id: string, type: string){
    this.id = id
    this.type = type
    this.scheduled = {}
  }

  processMIDIEvent(event, time, output){
    let sample
    if(event.type === 144){
      //console.log(144, ':', time, context.currentTime, event.millis)
      sample = createSample(-1, event)
      this.scheduled[event.midiNoteId] = sample
      sample.output.connect(output)
      sample.start(time)
    }else if(event.type === 128){
      //console.log(128, ':', time, context.currentTime, event.millis)
      sample = this.scheduled[event.midiNoteId]
      if(typeof sample === 'undefined'){
        console.error('sample not found for event', event)
        return
      }
      sample.stop(time, () => {
        //console.log('stop!')
        delete this.scheduled[event.midiNoteId]
      })
    }
  }

  stopAllSounds(){
    Object.keys(this.scheduled).forEach((sampleId) => {
      this.scheduled[sampleId].stop(0, () => {
        delete this.scheduled[sampleId]
      })
    })
  }
}

export function createInstrument(type: string){
  let id = `IN_${instrumentIndex++}_${new Date().getTime()}`
  let instrument = new Instrument(id, type)
  store.dispatch({
    type: CREATE_INSTRUMENT,
    payload: {
      id,
      instrument
    }
  })
  return id
}


