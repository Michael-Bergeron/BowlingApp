import React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

export default function EnterScore(props) {
  return (
    <>
    <View style = {styles.container}>
      <TouchableHighlight onPress = {() => props.scoreUpdate(1)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>1</Text></TouchableHighlight>
      <TouchableHighlight onPress = {() => props.scoreUpdate(2)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>2</Text></TouchableHighlight>
      <TouchableHighlight onPress = {() => props.scoreUpdate(3)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>3</Text></TouchableHighlight>
    </View>
    <View style = {styles.container}>
      <TouchableHighlight onPress = {() => props.scoreUpdate(4)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>4</Text></TouchableHighlight>
      <TouchableHighlight onPress = {() => props.scoreUpdate(5)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>5</Text></TouchableHighlight>
      <TouchableHighlight onPress = {() => props.scoreUpdate(6)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>6</Text></TouchableHighlight>
    </View>
    <View style = {styles.container}>
      <TouchableHighlight onPress = {() => props.scoreUpdate(7)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>7</Text></TouchableHighlight>
      <TouchableHighlight onPress = {() => props.scoreUpdate(8)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>8</Text></TouchableHighlight>
      <TouchableHighlight onPress = {() => props.scoreUpdate(9)} style={styles.button}><Text style = {{textAlign: 'center', paddingTop: 15}}>9</Text></TouchableHighlight>
    </View>
    <View style = {styles.container}>
      <TouchableHighlight onPress = {() => props.scoreUpdate(10)} style={{width: 150, height: 50, backgroundColor: '#eee'}}><Text style = {{textAlign: 'center', paddingTop: 15}}>Strike</Text></TouchableHighlight>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignSelf: 'center' },
  button: {width: 50, height: 50, backgroundColor: '#eee'},
});