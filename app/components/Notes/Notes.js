var React = require('react');

var Notes = React.createClass({
    render: function() {
        return (
            <div>
                <p>NOTES</p>
                Notes:  {this.props.notes}
            </div>
        )
    }
})


module.exports = Notes;