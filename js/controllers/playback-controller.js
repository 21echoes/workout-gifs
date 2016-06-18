define(function() {
    return function(playbackState) {
        return {
          setupControls: function() {
            document.getElementById('start').addEventListener('click', this.onClickStart, false);
            document.getElementById('back').addEventListener('click', this.onClickBack, false);
            document.getElementById('forward').addEventListener('click', this.onClickForward, false);
            document.getElementById('play-pause').addEventListener('click', this.onClickPlayPause, false);
            // document.getElementById('forward').addEventListener('click', onClickForward, false);

            var self = this;
            document.onkeydown = function(evt) {
              evt = evt || window.event;
              if (evt.keyCode == 32) {
                self.onClickPlayPause();
              } else if (evt.keyCode == 37) {
                self.onClickBack();
              } else if (evt.keyCode == 39) {
                self.onClickForward();
              }
            };
          },

          onClickStart: function() {
            playbackState.playNext();
          },

          onClickBack: function() {
            playbackState.playPrev();
          },

          onClickForward: function() {
            playbackState.playNext();
          },

          onClickPlayPause: function() {
            if (playbackState.isPlaying()) {
              playbackState.pause();
            } else {
              playbackState.play();
            }
          },

          setup: function() {
            this.setupControls();
          }
        };
    }
});
