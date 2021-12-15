import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Viewer from './components/view';

class App extends Component {
  render() {
    return (
      <View style = { styles.container}>
        <Viewer />
        <View style = { styles.containerRed}/>
        <View style = { styles.containerGreen}/>
        <View style = { styles.containerYelow}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'red',
  },
  containerRed: {
    flex: 1,
    backgroundColor: 'blue',
  },
  containerGreen: {
    flex: 1,
    backgroundColor: 'green',
  },
  containerYelow: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});

/*
class App extends Component {
  render() {
    return (
      <View style = {styles.container}> 
        <View style = {styles.subcontainer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    height: 40,
    width: 40,
    backgroundColor: 'red',
  },
});
*/

export default App;
