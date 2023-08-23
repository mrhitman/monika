(() => {
  // src/main.js
  function main() {
    const canvas2 = document.getElementById("canvas");
    const ctx = canvas2.getContext("2d");
    navigator.mediaDevices.getUserMedia({video: true}).then(initVideo(ctx)).catch(alert);
  }
  function initVideo(ctx) {
    return (rawData) => {
      const video = document.createElement("video");
      video.srcObject = rawData;
      video.play();
      video.onloadeddata = getVideoProcessor(canvas, video, ctx);
    };
  }
  function getVideoProcessor(canvas2, video, ctx) {
    const videoProcessor = () => {
      canvas2.width = video.videoWidth;
      canvas2.height = video.videoHeight;
      ctx.drawImage(video, 0, 0, canvas2.width, canvas2.height);
      const img = ctx.getImageData(0, 0, canvas2.width, canvas2.height);
      console.log(img);
    };
    return videoProcessor;
  }
  window.onload = main;
})();
