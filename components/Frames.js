import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function Frames(props) {
  return (
    <View style={styles.container}>
      <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
        <Row data = {props.frames} style = {styles.head} textStyle = {styles.text}/>
        <Rows data = {[props.scoreboard[0].slice(0,10)]} style = {{backgroundColor: '#fff'}} textStyle = {styles.text}/>
      </Table>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16, paddingTop: 80 },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6}
});