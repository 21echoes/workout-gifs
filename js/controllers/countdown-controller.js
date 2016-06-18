define(function() {
    return function(playbackState) {
        return {
          render: function() {
            var time = playbackState.remainingDur();
            var timer = document.getElementById("timer");
            if (time) {
              var timeStr = this.formatTime(time);
              if (timer.innerHTML != timeStr) {
                timer.innerHTML = timeStr;
              }
            } else {
              timer.innerHTML = '';
            }
            var self = this;
            window.requestAnimationFrame(function() {self.render()});
          },

          lpad: function(n, width, z) {
            z = z || '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
          },

          formatTime: function(time) {
            var minutes = Math.floor((time / 1000) / 60);
            time -= minutes * 1000 * 60;
            var seconds = Math.floor(time / 1000);
            return this.lpad(minutes, 2) + ":" + this.lpad(seconds, 2);
          }
        };
    }
});
