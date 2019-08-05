import React, { Component } from 'react';
import { ImageBackground, Animated, StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements'
import Frames from './components/Frames';
import EnterScore from './components/EnterScore';
import RecentFrames from './components/RecentFrames';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0), 
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      scoreboard: [['-','-','-','-','-','-','-','-','-','-', '-', '-']],
      extra: ['X','X'],
      recentFrames: [{
        frame: '',
        scores: ['-','-'],
        overall: '-'
      },
      {
        frame: '',
        scores: ['-','-'],
        overall: '-'
      }
      ,{
        frame: '',
        scores: ['-','-'],
        overall: '-'
      }],
      currentScore: 0,
      enterScore: false,
      currentFrame: 1, 
      frameBowl: 1,
      splashScreen: true
    }
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,  
        duration: 5000,
      }
    ).start();  
  }

  showEnterScore() {
    if (this.state.enterScore){
      this.setState({enterScore: false})
    } else {this.setState({enterScore: true})}
  }

  scoreUpdate(pins){
    let scoreboard = this.scoreboardLogic(pins);
    let currentScore = this.overallScoreLogic(scoreboard);
    let {frameBowl, currentFrame, recentFrames} = this.state
    if (frameBowl === 1 && pins === 10){
      recentFrames.shift();
      recentFrames.push({frame: currentFrame, scores: ['X','-'],overall: 'X'})
      currentFrame++;
    }
    else if (frameBowl === 1 && pins !== 10) {
      recentFrames.shift();
      recentFrames.push({frame: currentFrame, scores: [pins,'-'],
        overall: pins})
      frameBowl = 2;
    } else {
      recentFrames[2].scores[1] = pins;
      if (recentFrames[2].overall + pins >= 10){recentFrames[2].overall = '/';} 
      else {recentFrames[2].overall += pins}
      frameBowl = 1;
      currentFrame++;}
    this.setState({currentScore, frameBowl, currentFrame, scoreboard, recentFrames})
  }
  
  scoreboardLogic(pins) {
    let scoreboard = this.state.scoreboard;
    if (pins === 10){
      scoreboard[0][this.state.currentFrame - 1] = 'X';
    } else {
      if (this.state.frameBowl === 1){
        scoreboard[0][this.state.currentFrame - 1] = pins;
      } else {
        if (scoreboard[0][this.state.currentFrame - 1] + pins >= 10){
          scoreboard[0][this.state.currentFrame - 1] = '/';
        } else {
          scoreboard[0][this.state.currentFrame - 1] += pins;
        }
      }
    }
    return scoreboard;
  }

  overallScoreLogic(scoreboard){
    let currentScore = 0;
    let {currentFrame} = this.state;
    if (currentFrame > 10) {currentFrame = 10}
    for (let i = 0; i < currentFrame; i++){
      let score2 = scoreboard[0][i+1];
      let score3 = scoreboard[0][i+2];
      if (score2 === 'X' || score2 === '/'){score2 = 10;}
      if (score3 === 'X' || score3 === '/'){score3 = 10;}
      if (score2 === '-') {score2 = 0}
      if (score3 === '-') {score3 = 0}
      if (scoreboard[0][i] === 'X'){
        currentScore += 10 + score2 + score3;
      } else if (scoreboard[0][i] === '/'){
        currentScore += 10 + score2;
      } else {
        currentScore += scoreboard[0][i];
      }
    }
    return currentScore
  }

  newGame() {
    this.setState({
      fadeAnim: new Animated.Value(0), 
      frames: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      scoreboard: [['-','-','-','-','-','-','-','-','-','-', '-', '-']],
      extra: ['X','X'],
      recentFrames: [{
        frame: '',
        scores: ['-','-'],
        overall: '-'
      },
      {
        frame: '',
        scores: ['-','-'],
        overall: '-'
      }
      ,{
        frame: '',
        scores: ['-','-'],
        overall: '-'
      }],
      currentScore: 0,
      enterScore: false,
      currentFrame: 1, 
      frameBowl: 1,
      splashScreen: true
    })
  }


  splashClick() {
    this.setState({splashScreen: false})
  }

  render() {
    return (
      <View style = {styles.container}>
        {this.state.splashScreen ? (
          <Animated.View style={{opacity: this.state.fadeAnim}}>
            <ImageBackground style = {{width: '100%', height: '100%'}}source = {{uri: 'https://images.wallpaperscraft.com/image/bowling_pin_bowling_reflection_126150_938x1668.jpg'}}>
              <View style={{height: '100%', alignSelf: 'center', paddingTop: 600}}>
                <Button
                  title= 'Click here to bowl!'
                  onPress = {() => this.splashClick()}
                  />
              </View>
            </ImageBackground>
          </Animated.View>
        ) : (
          <ImageBackground style = {{width: '100%', height: '100%'}}source = {{uri: 'https://brunswickbowling.com/uploads/bowling_centers/Equipment-Parts-Supplies/Center-Environment/lanes/Prolane/_600x600_crop_center-center_none/lanes_prolane_1220x1220.png'}}>
            <Frames frames = {this.state.frames} scoreboard={this.state.scoreboard} />
            <RecentFrames recentFrames = {this.state.recentFrames}/>
            <Text style = {styles.currentScore}>Current Score</Text>
            <Text style = {styles.score}>{this.state.currentScore}</Text>
            <View style = {{width: 150, alignSelf: 'center'}}>
              <Button
                onPress={()=>this.showEnterScore()}
                title="Enter new score"
              />
            </View>
            {this.state.enterScore ? (
              <EnterScore scoreUpdate = {this.scoreUpdate.bind(this)}/>
            ) : (<></>)}
            <View style = {{width: 150, alignSelf: 'center', paddingTop: 20}}>
              <Button
                onPress={()=>this.newGame()}
                title="Start Over"
              />
            </View>
        </ImageBackground>
      )
  }
  </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  score: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 70,
    paddingTop: 30,
    alignSelf: 'center'
  },
  currentScore: {
    fontSize: 20,
    paddingTop: 70,
    alignSelf: 'center'
  }
});
