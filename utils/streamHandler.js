var Tweet = require("../models/Tweet");

module.exports = function (stream, io) {

    stream.on("data", function (data) {

        // Tweet Object
        var tweet = {
            twid      : data.id,
            active    : false,
            author    : data.user.name,
            avatar    : data.user.profile_image_url,
            body      : data.text,
            date      : data.created_at,
            screnname : data.user.screen_name
        };

        // Tweet instance
        var tweetEntry = new Tweet(tweet);

        // Save tweet to the DB
        tweetEntry.save(function (err) {
            if (!err) {
                // Socket.io emits the tweet
                io.emit("tweet", tweet);
            }
        });

    });

};