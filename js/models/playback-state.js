define(function() {
    return function(playlist) {
        return {
          currentIndex: -1,

          playbackToken: null,
          endTime: null,
          pauseTimeRemaining: null,

          getCurrentItem: function() {
            if (!this.hasStarted() || this.isFinished()) {
              return null;
            }
            return playlist[this.currentIndex];
          },

          numGifs: function() {
            return playlist.length;
          },

          isPlaying: function() {
            return !!this.playbackToken;
          },

          isPaused: function() {
            return this.pauseTimeRemaining != null;
          },

          hasStarted: function() {
            return this.currentIndex >= 0;
          },

          isFinished: function() {
            return this.currentIndex >= this.numGifs();
          },

          remainingDur: function() {
            if (this.pauseTimeRemaining) {
              return this.pauseTimeRemaining;
            }
            if (this.endTime) {
              return this.endTime - new Date().getTime();
            }
            return null;
          },

          nextGif: function() {
            if (!this.isFinished()) {
              this.currentIndex = this.currentIndex + 1;
            }
          },

          prevGif: function() {
            if (this.currentIndex > 0) {
              this.currentIndex = this.currentIndex - 1;
            }
          },

          playPrev: function() {
            this.prevGif();
            this.stopPlayback();
            this.play();
          },

          playNext: function() {
            this.nextGif();
            this.stopPlayback();
            this.play();
          },

          play: function() {
            if (this.isFinished()) {
              return;
            }
            var dur = this.remainingDur();
            dur = dur ? dur : playlist[this.currentIndex]["dur"];
            this.playGif(this.currentIndex, dur);
          },

          playGif: function(index, dur) {
            if (this.isPlaying() || this.isFinished()) {
              return;
            }
            this.pauseTimeRemaining = null;
            this.endTime = new Date().getTime() + dur;
            var self = this;
            this.playbackToken = setTimeout(function() {self.playNext()}, dur);
          },

          pause: function() {
            if (!this.isPlaying()) {
              return;
            }
            this.pauseTimeRemaining = this.endTime - new Date().getTime();
            this.stopPlayback();
          },

          stopPlayback: function() {
            this.endTime = null;
            clearTimeout(this.playbackToken);
            this.playbackToken = null;
          }
        }
    };
});
