import qambi from 'qambi'

document.addEventListener('DOMContentLoaded', function(){

  console.time('loading and parsing assets took')

  qambi.init({
    song: {
      type: 'Song',
      url: '../data/minute_waltz.mid',
      // url: '../data/mozk545a.mid'
    },
    piano: {
      type: 'Instrument',
      url: '../../instruments/heartbeat/city-piano-light.json'
    }
  })
  .then((data) => {

    let {song, piano} = data

    song.getTracks().forEach(track => {
      track.setInstrument(piano)
    })

    // song.setMetronome(true);
    // const metronomeName = `${song.id}_metronome`;
    // song.addEventListener('noteOn', (note) => {
    //   console.log(note.data._track.name);
    //   if(note.data._track.name === metronomeName) {
    //     console.log(`tick says the metronome: ${note}`);
    //   }
    // });

    initUI(song)
  })


  function initUI(song){
    console.timeEnd('loading and parsing assets took')

    let btnPlay = document.getElementById('play')
    let btnPause = document.getElementById('pause')
    let btnStop = document.getElementById('stop')
    let divLoading = document.getElementById('loading')
    divLoading.innerHTML = ''

    btnPlay.disabled = false
    btnPause.disabled = false
    btnStop.disabled = false

    btnPlay.addEventListener('click', function(){
      song.play()
    })

    btnPause.addEventListener('click', function(){
      song.pause()
    })

    btnStop.addEventListener('click', function(){
      song.stop()
    })
  }
})
