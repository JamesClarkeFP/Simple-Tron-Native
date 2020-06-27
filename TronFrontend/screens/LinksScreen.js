import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useRef, useState } from 'react'
import { getGrid, setGrid , startGame, setTeam, setLoop} from '../store/actions'
import { useDispatch, useSelector } from "react-redux";
import {CountProvider, useCount} from '../store/count-context'
import  Grid  from '../components/Grid'

function StartGame() {
    const [count, setCount] = useCount()
    const increment = () => setCount(c => c + 1)
    return <Button title='start game' style={styles.button} color='green' onPress={increment} />
}

export default function LinksScreen() {
  const dispatch = useDispatch();

  function twoFunc(){
    dispatch(setGrid({
      "id": 1,
      "board": "[[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5],[0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5]]"
  }))
    dispatch(startGame('false'))
  }
  return (
    <CountProvider>
      <View style={styles.container}>
        <StartGame />
        <Button title='reset game' style={styles.button} color='grey'  onPress={ () => twoFunc()}/>
        <Grid />
      </View>
    </CountProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: "center",
    //justifyContent: "bottom",
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