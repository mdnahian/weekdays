// import statements
var React = require('react-native');
var Text = React.Text;
// var StyleSheet = React.StyleSheet;


// create component
var Day = React.createClass({
	render: function(){
		return <Text style={this.style()}>
			{this.props.day}
		</Text>
	},
	style: function() {
		return {
			fontSize: this.fontSize(),
			color: '#ffffff',
			backgroundColor: this.backgroundColor(),
			margin: 5,
			padding: 3
		}
	},
	backgroundColor: function() {
		var opacity = 1 / this.props.daysUntil;
		return 'rgba(26, 211, 214, '+ opacity +')'; 
	},
	opacity: function() {
		return 1 / this.props.daysUntil;
	},
	fontSize: function() {
		return 60 - 6 * this.props.daysUntil;
	}
});


// make it available elsewhere
module.exports = Day;