define(function() {
    var exercises = {
      "cute": [
        {
          "group-title": "cute",
          "src": "images/cats/cute/1.gif",
          "link": "http://www.cutecatgifs.com/wp-content/uploads/2015/07/Cat-slots.gif",
          "instructions": "Watch this cat",
          "reps":"10",
          "dur": 30000
        },
        {
          "group-title": "cute",
          "src": "images/cats/cute/2.gif",
          "link": "http://imagesmtv-a.akamaihd.net/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/10/CATS-Surprise-1443820870.gif",
          "instructions": "Aren't cats awesome?",
          "dur": 30000
        },
        {
          "group-title": "cute",
          "src": "images/cats/cute/3.gif",
          "link": "https://media.giphy.com/media/freTElrZl4zaU/giphy.gif",
          "instructions": "WOWOWOWOWOWOMEOW",
          "dur": 30000
        }
      ]
    };

    var playlist = [
      exercises['cute'][0],
      exercises['cute'][1],
      exercises['cute'][2],
    ];

    return {
        exercises: exercises,
        playlist: playlist
    };
});
