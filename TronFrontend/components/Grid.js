import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View , Button, Animated} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useRef } from 'react'
import { getGrid, setGrid , startGame, setTeam} from '../store/actions'
import { useDispatch, useSelector } from "react-redux";
import Cell from '../components/Cell'
export default function Grid() {
  const dispatch = useDispatch();
  let board = useSelector(state => state.state)
  //console.log(board)
  useEffect(() => {
    const doit = setInterval(() => dispatch(getGrid()), 1000)
  }, [])

  useEffect(() => {
    if(board.started != 'false' && board.started != 'true'){ //if countdown has started
      let date = new Date();
      let n = date.getTime();    //get the time now
      let s = board.started   //get the time it starts
      let difference = s - n //get the difference in time
      
      setTimeout(() => intervals(), difference)//set this function to start after a delay of the difference
      dispatch(startGame('true')) //so we set this so it doesn't run anymore
    }

  })
  function intervals(){//this will be the function that moves the shit
    //setInterval(() => dispatch(setGrid({"board": "[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,2,0,0,0,0,0,0],[0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,1,1,1,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]"})), 200)
  }

  let grid = useSelector(state => state.state.grid)
  console.log(grid)
  return (
    <>
      {
        grid.map((row) => {
            return(
                row.map((cell) => {
                    //console.log(cell)
                    return <Cell cell={cell} />
                })
              )
          })
      }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: "center",
    //justifyContent: "bottom",
    //backgroundColor: '#fafafa',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    //backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10
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
  box: {
    height: 150,
    width: 150,
    backgroundColor: "blue",
    borderRadius: 5
  },
});
