'use strict';

let trackId = 0;


class Track{

  constructor(...args){
    let id = 'P' + trackId++ + Date.now();

  }



}

export default function createTrack(){
  return new Track(...arguments);
}


/*
let Track = {
    init: function(){
        let id = 'T' + trackId++ + new Date().getTime();
        Object.defineProperty(this, 'id', {
            value: id
        });
    }
};

export default function createTrack(){
  var t = Object.create(Track);
  t.init(arguments);
  return t;
}

*/