define(function(require) {
    return function(routinePath) {
        require([routinePath], function(routine) {
            var playbackState = require('./models/playback-state')(routine.playlist);

            var playbackController = require('./controllers/playback-controller')(playbackState);
            var countdownController = require('./controllers/countdown-controller')(playbackState);
            var gifController = require('./controllers/gif-controller')(playbackState);

            playbackController.setup();
            gifController.render();
            countdownController.render();
        });
    };
});
