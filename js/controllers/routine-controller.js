define(function(require) {
    return function(routine) {
        var playbackState = require('../models/playback-state')(routine.playlist);

        var playbackController = require('./playback-controller')(playbackState);
        var countdownController = require('./countdown-controller')(playbackState);
        var gifController = require('./gif-controller')(playbackState, routine.title);

        playbackController.setup();
        gifController.render();
        countdownController.render();
    };
});
