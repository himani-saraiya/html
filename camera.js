if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    var constraints = { video: true, audio: false };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
            var video = document.getElementById('camera-view');
            video.srcObject = stream;
            video.play();
        })
        .catch(function (error) {
            console.error('Error accessing camera:', error);
        });
} else {
    console.error('getUserMedia is not supported in this browser');
}
