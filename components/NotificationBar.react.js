/* @jsx React.DOM */

var React = require("react");

module.exports = NotificationBar = React.createClass({

    render : function () {

        var count = this.props.count;

        return (
            <div className={"Notification-bar" + (count > 0 ? " active" : "")}>
                <p>There are {count} new tweets! <a href="#top" onClick={this.props.onShowNewTweets}>Click here to view them</a></p>
            </div>
        );
    }
});