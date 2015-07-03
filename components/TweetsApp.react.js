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
            tweets : props.tweets,
            count  : 0,
            page   : 0,
            paging : false,
            skip   : 0,
            done   : false
        };
    },

    componentWillReceiveProps : function (newProps, oldProps) {

        this.setState(this.getInitialState(newProps));
    },

    componentDidMount : function () {

        var self = this,
            socket = io.connect();

        socket.on("tweet", function (data) {

            self.addTweet(data);
        });

        window.addEventListener("scroll", this.checkWindowScroll);
    },

    addTweet : function (tweet) {

        var updated = this.state.tweets,
            count = this.state.count + 1,
            skip = this.state.skip + 1;

        updated.unshift(tweet);

        this.setState({
            tweets : update,
            count  : count,
            skip   : skip,
        });
    },

    showNewTweets : function () {

        var update = this.state.tweets;

        updated.forEach(function (tweet) {
            tweet.active = true;
        });

        this.setState({
            tweets : updated,
            count  : count
        });
    },

    checkWindowScroll : function () {

        var height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            scroll = document.body.scrollTop,
            scrolled = (height + scroll) > document.body.offsetHeight;

        if (scrolled && !this.state.paging && !this.state.done) {

            this.setState({
                paging : true,
                page   : this.state.page + 1
            });

            this.getPage(this.state.page);
        }
    },

    getPage : function () {

        var request = new XMLHttpRequest(),
            self = this;

        request.open("GET", "page/" + page + "/" + this.state.skip, true);

        request.onload = function {

            if (request.status >= 200 && request.status < 400) {

                self.loadPagedTweets(JSON.parse(request.responseText));

            } else {

                self.setState({
                    paging : false,
                    done   : true
                });
            }
        };

        request.send();
    },

    loadPagedTweets : function (tweets) {

        var self = this;

        if (tweet.length > 0) {

            var updated = this.state.tweets;

            tweets.forEach(function (tweet) {
                updated.push(tweet);
            });

            setTimeout(function () {

                self.setState({
                    tweets : updated,
                    paging : false
                });
            }, 1000);

        } else {

            this.setState({
                done : true,
                paging : false
            });
        }
    }
});