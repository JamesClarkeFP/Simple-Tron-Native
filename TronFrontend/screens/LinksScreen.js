import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useEffect } from 'react'
import { getGrid, setGrid , startGame, setTeam} from '../store/actions'
import { useDispatch, useSelector } from "react-redux";

export default function LinksScreen() {
  const endpoint='http://a31f652467a434deaa17267893363707-1252241133.eu-west-2.elb.amazonaws.com:8000/tron/board/1'
  const dispatch = useDispatch();
  const board = useSelector(state => state.state)

  useEffect(() => {
    const doit = setInterval(() => dispatch(getGrid()), 1000)
    //const doit2 = setInterval(() => dispatch(setGrid({"board": "[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,2,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]"})), 10000)
  }, [])

  function getColour(x,y){
    if (board.grid[y][x] == 0) {
      return 'grey'
    }
    if (board.grid[y][x] == 1) {
      return 'red'
    }
    if (board.grid[y][x] == 2) {
      return 'blue'
    }
  }

  let rows = [] 
  for (let y=0; y < 11; y++){
    for (let x=0; x < 10; x++){
      let colour = getColour(x,y)
      rows.push(
        <View style={{top: (y* 50) + 100, left: (x*50) + 450, height: 40,width:40, backgroundColor: colour, position:'absolute'}} />
      )
    }
  }
  
  let alternative = []
  if (board.started == 'false') {
    alternative.push(<Button title='start game' style={styles.button} color='green' onPress={() => dispatch(startGame('true'))} />)
  } else {
    alternative.push(<Button title='stop game' style={styles.button} color='green' onPress={() => dispatch(startGame('false'))} />)
  }
  function twoFunc(){
    dispatch(setGrid({"board" : "[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]"}))
    dispatch(startGame('false'))
  }

  return (
    <View style={styles.container}>
      <Button title='start game' style={styles.button} color='green' onPress={() => dispatch(startGame('true'))} />
      <Button title='reset game' style={styles.button} color='grey' onPress={ () => twoFunc()}/>
      {rows}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "bottom",
    //backgroundColor: '#fafafa',
  },
  button: {
    //flex: 1,
    bottom: 0,
    left: 0,
    position: "absolute"
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
