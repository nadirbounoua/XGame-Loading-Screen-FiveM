var isMuted = false;
function muteVideo() {
    if (!isMuted)  {
        $('.player').YTPMute();
        isMuted = true;
        $('.mute-btn').html("Unmute")
    }
    else {
        $('.player').YTPUnmute()
        isMuted = false;
        $('.mute-btn').html("Mute")
    }
}