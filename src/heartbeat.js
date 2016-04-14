
import {requestAnimationFrame} from './init';
import {context} from './init_audio';


let timedTasks = new Map();
let repetitiveTasks = new Map();
let scheduledTasks = new Map();
let tasks = new Map();
let lastTimeStamp;

function heartbeat(timestamp){
  let now = context.currentTime;

  // for instance: the callback of sample.unschedule;
  for(let [key, task] of timedTasks){
    if(task.time >= now){
      task.execute(now);
      timedTasks.delete(key);
    }
  }


  // for instance: song.update();
  for(let task of scheduledTasks.values()){
    task(now);
  }

  // for instance: song.pulse();
  for(let task of repetitiveTasks.values()){
    task(now);
  }

  lastTimeStamp = timestamp;
  scheduledTasks.clear();

  //setTimeout(heartbeat, 10000);
  requestAnimationFrame(heartbeat);
}


export function addTask(type, id, task){
  let map = tasks.get(type);
  map.set(id, task);
}

export function removeTask(type, id){
  let map = tasks.get(type);
  map.delete(id);
}

(function start(){
  tasks.set('timed', timedTasks);
  tasks.set('repetitive', repetitiveTasks);
  tasks.set('scheduled', scheduledTasks);
  heartbeat();
}())
