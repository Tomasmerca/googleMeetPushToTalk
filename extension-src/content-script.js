console.log('hi I\'m google meet extension')
// "MediaPlayPause" 	Toggles between playing and pausing the current media. 	VK_MEDIA_PLAY_PAUSE (0xB3)
//APPCOMMAND_MEDIA_PLAY_PAUSE
// Buttons


let micBtn, chatBar, videoBtn;
let key = "MediaPlayPause";
const addKeyPressEvent = () => {
    document.addEventListener('keydown', (e) => {

        micBtn = findMic()
        if (e.key == key && isMicOff()) {
            micBtn.click()
        }
    });

    document.addEventListener('keyup', (e) => {
        micBtn = findMic()
        if (e.keyCode == key && !isMicOff()) {
            micBtn.click()
        }
    });
}


const isMicOff = () => {
    if (micBtn.dataset.isMuted == 'false') {
        return false
    }
    return true;
}
const isCamOff = () => {
    videoBtn = findCam()
    if (videoBtn.dataset.isMuted == 'false') {
        return false;
    }
    return true;
}

addKeyPressEvent()

