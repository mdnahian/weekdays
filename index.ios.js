// import statements
var Moment = require('moment');
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var Day = require('./src/day-item');

// create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    var daysArray = [];

    for(var i=0; i<7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysArray.push(
        <Day key={day} day={day} daysUntil={i} />
      )
    }


    return daysArray;
  }
});

// style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column', // default direction (row is flipped)
    justifyContent: 'center', // move in y
    alignItems: 'center' // move in x
  }
});


// show the react component on screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});