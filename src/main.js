function main() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  navigator.mediaDevices
    .getUserMedia({video: true})
    .then(initVideo(ctx))
    .catch(alert);
}

function initVideo(ctx) {
  return (rawData) => {
    const video = document.createElement("video");
    video.srcObject = rawData;
    video.play();
    video.onloadeddata = getVideoProcessor(canvas, video, ctx);
  };
}

function getVideoProcessor(canvas, video, ctx) {
  const videoProcessor = () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(videoProcessor);
  };

  return videoProcessor;
}

window.onload = main;
