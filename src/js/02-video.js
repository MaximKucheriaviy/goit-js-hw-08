import _ from "lodash";
import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const startTimer = localStorage.getItem('videoplayer-current-time');
if(startTimer){
    player.setCurrentTime(JSON.parse(startTimer).seconds);
}
player.on('timeupdate', _.throttle(timeUpdate, 1000));

function timeUpdate(value){
    localStorage.setItem('videoplayer-current-time', JSON.stringify(value));
}
