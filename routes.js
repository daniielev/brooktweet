var JSX = require("node-jsx").install(),
    React = require("react"),
    TweetsApp = require("./components/TweetsApp.react"),
    Tweet = require("./models/Tweet");

model.export = {

    index : function (req, res) {

        Tweet.getTweets(0, 0, function (tweets, page) {

            var markup = React.renderComponentToString(
                    TweetsApp({tweets : tweets})
                );

            res.render("home", {
                markup : markup,
                state  : JSON.stringify(tweets)
            })
        });
    },

    page  :  function (req, res) {

        Tweet.getTweets(req.params.page, req.params.skip, function (tweets) {

            // Render as JSON
            res.send(tweets)
        });
    }
}