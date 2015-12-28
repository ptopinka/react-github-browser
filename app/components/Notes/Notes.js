var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');


var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
        addNote: React.PropTypes.func.isRequired,
    },

    render: function() {
        return (
            <div>
                <p>NOTES for {this.props.username}</p>
                <AddNote username={this.props.username} addNote={this.props.addNote}/>
                <NotesList notes={this.props.notes}   />
            </div>
        )
    }
})


module.exports = Notes;