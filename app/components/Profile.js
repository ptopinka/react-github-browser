var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function() {
        return {
           notes: [1,2,3],
            bio: { name: 'Pavel Topinka'},
            repos: ['a','b','c']

        }
    },



    componentDidMount: function() {
        this.ref = new Firebase('https://ptopinka-notetaker.firebaseio.com');

    /*
        this.ref.authWithCustomToken("ll6PIpwsqMlMpvobrHy27SMrrYMMuYZZEcfnrmgX", function(error, result) {
            if (error) {
                console.log("Authentication Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", result.auth);
                console.log("Auth expires at:", new Date(result.expires * 1000));
            }
        });
     */
        //this.ref = new Firebase('https://github-note-taker.firebaseio.com/');
        var childRef = this.ref.child(this.props.params.username);

        this.bindAsArray(childRef, 'notes');
    },
    componentWillUnmount: function() {
        this.unbind('notes');
    },

   render: function() {
       return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={this.props.params.username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={this.props.params.username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes username={this.props.params.username} notes={this.state.notes} />
                </div>
            </div>
       );
   }
})



module.exports = Profile