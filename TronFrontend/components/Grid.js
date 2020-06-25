import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View , Button, Animated} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useRef } from 'react'
import { getGrid, setGrid , startGame, startGameNow, setTeam, setSquare} from '../store/actions'
import { useDispatch, useSelector } from "react-redux";
import Cell from '../components/Cell'

export default function Grid() {
    const[position, setPosition] = React.useState({x:0, y:6})
    const[facing, setFacing] = React.useState('right')
    //How do i colour the position?
    //i guess run a dispatch to colour a new cell
    //which means setting the 0.5 to a 1?

    function nextPosition(){
        console.log('hi')
        if (facing == 'up'){
            let x = position.x
            let y = position.y
            setPosition({x:x, y:(y+1)})
        } else if (facing == 'right'){
            let x = position.x
            let y = position.y
            setPosition({x:(x+1), y:y})
        } else if (facing == 'down'){
            let x = position.x
            let y = position.y
            setPosition({x:x,y:(y-1)})
        } else {
            let x = position.x
            let y = position.y
            setPosition({x:(x-1),y:y})
        }
    }
    //loop at a given time i guess 
  useEffect(() => {
    const doit = setInterval(() => dispatch(getGrid()), 1000)
  }, [])    
  let grid = useSelector(state => state.state.grid)
  const dispatch = useDispatch();


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
