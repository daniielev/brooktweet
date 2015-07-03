/* @jsx React.DOM */

var React = require("react"),
    Tweet = require("./Tweet.react.js");

module.exports = Tweets = React.createClass({

    render : function () {

        var content = this.props.tweets.map(function (tweet) {
            return (
                <Tweet key={tweet.twid} tweet={tweet} />
            );
        });

        return (
            <section className="tweets">{content}</section>
        );
    }
});