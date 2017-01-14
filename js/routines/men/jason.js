define(function() {
    var exercises = {
      "full body": [
        {
          "group-title": "full body",
          "video-src": "videos/1.mp4",
          "instructions": "test vidya",
          "dur": 30000
        },
        {
          "group-title": "full body",
          "src": "videos/2.mp4",
          "instructions": "Watch this cat",
          "dur": 30000
        },
        {
          "group-title": "full body",
          "src": "videos/3.mp4",
          "instructions": "Aren't cats awesome?",
          "dur": 30000
        },
        {
          "group-title": "full body",
          "src": "videos/4.mp4",
          "instructions": "WOWOWOWOWOWOMEOW",
          "dur": 30000
        },
        {
          "group-title": "full body",
          "src": "videos/5.mp4",
          "instructions": "WOWOWOWOWOWOMEOW",
          "dur": 30000
        },
        {
          "group-title": "full body",
          "src": "videos/6.mp4",
          "instructions": "WOWOWOWOWOWOMEOW",
          "dur": 30000
        }
      ]
    };

    var playlist = [
      exercises['full body'][0],
      exercises['full body'][1],
      exercises['full body'][2],
    ];

    return {
        title: "Jason's Workout",
        exercises: exercises,
        playlist: playlist
    };
});
