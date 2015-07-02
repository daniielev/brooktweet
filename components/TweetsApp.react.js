module.exports = TweetsApp = React.createClass({

    render : function () {

        return (
            <div className="tweets-app">
                <Tweets tweets={this.state.tweets} />
                <Tweets paging={this.state.paging} />
                <NotificationBar count={this.state.count} onShowNewTweets={this.ShowNewTweets} />
            </div>
        )
    },

    getInitialState : function (props) {

        props = props || this.props;

        return {

        }
    }
});