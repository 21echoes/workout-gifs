define(function() {
    return function(playbackState, routineTitle) {
      console.log("routine title inner", routineTitle);
        String.prototype.endsWith = function(suffix) {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };

        return {
          render: function() {
            var playPauseButton = document.getElementById("play-pause");
            playPauseButton.innerHTML = playbackState.isPaused() ? "play" : "pause";

            var item = playbackState.getCurrentItem();

            var landingContainer = document.getElementById("landing");
            var playbackContainer = document.getElementById("playback");
            var endingContainer = document.getElementById("ending");

            var groupElem = document.getElementById("group-title");
            var imgElem = document.getElementById("playing-gif");
            var videoElem = document.getElementById("playing-video");
            var captionElem = document.getElementById("playing-caption");
            // var repsElem = document.getElementById("playing-reps");
            var gifContainer = document.getElementById("gif");
            var linkElem = document.getElementById("attrib-link");
            if (item) {
              landingContainer.style.display = 'none';
              playbackContainer.style.display = 'block';
              endingContainer.style.display = 'none';
              var imgSrc = item['src'];
              var videoSrc = item['video-src'];
              var rerender = false;
              if (videoSrc) {
                videoElem.style.display = 'block';
                imgElem.style.display = 'none';
                rerender = !videoElem.src.endsWith(videoSrc);
                if (rerender) {
                    videoElem.src = videoSrc;
                }
              } else {
                videoElem.style.display = 'none';
                imgElem.style.display = 'block';
                rerender = !imgElem.src.endsWith(imgSrc);
                if (rerender) {
                    imgElem.src = imgSrc;
                }
              }
              if (rerender) {
                captionElem.innerHTML = item['instructions'];
                groupElem.innerHTML = item['group-title'];
                linkElem.setAttribute("href", item['link']);

                // var reps = item['reps'];
                // if (reps) {
                //   reps = reps + ' reps';
                //   repsElem.innerHTML = reps;
                //   repsElem.style.display = 'block';
                // } else {
                //   repsElem.style.display = 'none';
                // }
              }
            } else {
              playbackContainer.style.display = 'none';
              if (!playbackState.isFinished()) {
                var landingTitle = document.getElementById("hero-title");
                landingTitle.innerHTML = routineTitle;

                landingContainer.style.display = 'block';
                endingContainer.style.display = 'none';
              } else {
                landingContainer.style.display = 'none';
                endingContainer.style.display = 'block';
              }
            }
            var self = this;
            window.requestAnimationFrame(function() {self.render()});
          }
        };
    }
});
