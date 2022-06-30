import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const onPlay = function ({ seconds }) {
    // data is an object containing properties specific to that event
       localStorage.setItem("videoplayer-current-time", seconds)
       console.log("Vot data");
       console.log(localStorage.getItem("videoplayer-current-time"));
};
// player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
    
});
player.on('timeupdate',throttle( onPlay, 1000));