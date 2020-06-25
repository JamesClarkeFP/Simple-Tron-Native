import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View , Button, Animated} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useRef } from 'react'
import { getGrid, setGrid , startGame, startGameNow, setTeam} from '../store/actions'
import { useDispatch, useSelector } from "react-redux";
import Cell from '../components/Cell'

export default function Grid() {
  useEffect(() => {
    const doit = setInterval(() => dispatch(getGrid()), 200)
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
