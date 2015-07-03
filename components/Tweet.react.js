/* @jsx React.DOM */

var React = require("react");

module.exports = Tweet = React.createClass({

    render : function () {

        var tweet = this.props.tweet;

        return (

            <article className={"tweet" + (tweet.active ? " active" : "")}>
                <img src={tweet.avatar} className={avatar} alt={tweet.screenname}>
                <blockquote>
                    <cite>
                        <a href={"https://www.twitter.com/" + tweet.screenname} target="_blank">{tweet.author}</a>
                        <span className="screen-name">@{tweet.screenname}</span>
                    </cite>
                    <span className="content">{tweet.body}</span>
                </blockquote>
            </article>
        );
    }
});