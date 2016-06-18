define(function() {
    return function(playbackState) {
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
            var captionElem = document.getElementById("playing-caption");
            // var repsElem = document.getElementById("playing-reps");
            var gifContainer = document.getElementById("gif");
            var linkElem = document.getElementById("attrib-link");
            if (item) {
              landingContainer.style.display = 'none';
              playbackContainer.style.display = 'block';
              endingContainer.style.display = 'none';
              var src = item['src'];
              if (!imgElem.src.endsWith(src)) {
                var newImg = new Image();
                newImg.src = src;
                newImg.id = "playing-gif";
                gifContainer.replaceChild(newImg, imgElem);

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
