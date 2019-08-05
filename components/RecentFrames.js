import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function RecentFrames(props) {
  return (
    <View>
      <View style = {styles.container}>
        {props.recentFrames.map((item) => {
          return (
          <View key = {Math.random()} style={styles.frame}>
            <View style = {{flexDirection: 'row'}}>
              <Text style={{width: 20}}>{item.frame}</Text>
              <View style = {styles.subFrame}>
                <Text style={styles.score}>{item.scores[0]}</Text>
              </View>
              <View style = {styles.subFrame}>
                <Text style={styles.score}>{item.scores[1]}</Text>
              </View>
            </View>
            <View style = {{flexDirection: 'row', width: 100, height: 50}}>
              <Text style = {styles.overallScore}>{item.overall}</Text>
            </View>
          </View>)
        })}
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignSelf: 'center' },
  frame: {width: 100, height: 100, borderRadius: 1, borderWidth: 1,borderColor: 'black'},
  subFrame: {width: 40, height: 40, borderRadius: 1, borderWidth: 1,borderColor: 'black'},
  score: {flex: 1, alignSelf: 'center', justifyContent: 'center'},
  overallScore: {flex: 1, textAlign: 'center', fontSize: 30}
});