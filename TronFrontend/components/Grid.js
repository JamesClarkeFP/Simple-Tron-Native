import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
//import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Button, Animated, TextInput} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useRef , useState} from 'react'
import { getGrid, setGrid , startGame, startGameNow, setTeam, setSquare} from '../store/actions'
import { useDispatch, useSelector } from "react-redux";
import {usePosition} from '../hooks/usePosition'
import Cell from '../components/Cell'
import {useCount} from '../store/count-context'

export default function Grid() {
  let grid = useSelector(state => state.state.grid)
  const dispatch = useDispatch();
  const [count, setCount] = useCount()
  const[facing, setFacing] = useState('right')
  const[rendered,setRendered] = useState(false)
  const[position, setPosition] = useState({x:-1, y:0})
  useEffect(()=>{

    //do all the things that need to be done on each render
    if (count >= 0){
      setPosition( position => nextPosition(position) )
      setRendered( rendered => false)

      //This will make everything happen again after this timeout
      setTimeout(()=> setCount(c=>c+1), 500) 
    }

  }, [count])
  
  //This draws the square on screen
  if (count >= 0 && rendered == false){ 
    setRendered(true)
    dispatch(setSquare(grid, position.x, position.y, 1))

  }

  function nextPosition(position){
    if (facing == 'up'){
      let x = position.x
      let y = position.y
      return({x:x, y:(y-1)})
    } else if (facing == 'right'){
      let x = position.x + 1
      let y = position.y
      return({x:x, y:y})
    } else if (facing == 'down'){
      let x = position.x
      let y = position.y
      return({x:x,y:(y+1)})
    } else {
      let x = position.x
      let y = position.y
      return({x:(x-1),y:y})
    }
  }

  //Updates the grid from the rest api every half second
  useEffect(() => {
    const doit = setInterval(() => dispatch(getGrid()), 500)
  }, [])



  const[text, setText] = useState('')
  if (text.slice(-1) == 'w' && facing != 'up'){
    setFacing('up')
  } else if (text.slice(-1) == 'd' && facing != 'right'){
    setFacing('right')
  } else if (text.slice(-1) == 's' && facing != 'down'){
    setFacing('down')
  } else if (text.slice(-1) == 'a' && facing != 'left'){
    setFacing('left')
  }

  if (count >= 0){
    return (
      <>
      <TextInput autoFocus={true} onChangeText={text => setText(text)} value={text} />
        {
          grid.map((row) => {
              return(
                  row.map((cell) => {
                      return <Cell cell={cell} />
                  })
                )
            })
        }
      </>
    );
  }
  return (
    <>
      {
        grid.map((row) => {
            return(
                row.map((cell) => {
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
  button: {
    height: 50,
    width: 50,
    flex: 1,
    bottom: 0,
    left: 0,
    position: "absolute"
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
    flex: 1,
    bottom: 100,
    left: 100,
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
