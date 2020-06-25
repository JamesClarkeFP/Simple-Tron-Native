import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View , Button, Animated} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useEffect, useRef } from 'react'
import { getGrid, setGrid , startGame, setTeam} from '../store/actions'
import { useDispatch, useSelector } from "react-redux";

export default function Cell(props) {
  //console.log(props.cell)
  const cell = useRef(new Animated.Value(props.cell.value)).current;
  
    if (props.cell.value == 0.5) {
        Animated.timing(cell, {
            toValue: 0.5,
            duration: 0
        }).start();
    }
    if (props.cell.value == 0) {
        Animated.timing(cell, {
            toValue: 0,
            duration: 0
        }).start();
    }
    if (props.cell.value == 1) {
        Animated.timing(cell, {
            toValue: 1,
            duration: 0
        }).start();
    }
  

  const BackgroundColorConfig = cell.interpolate(
    {
        inputRange: [ 0, 0.2, 0.4, 0.6, 0.8, 1 ],
        outputRange: [ 'red', '#CDDC39', 'grey', 'grey', '#3F51B5', 'blue' ]
    }
  )

  return (
      <>
        <Animated.View 
            style={{
                top: (props.cell.y* 50) + 100, 
                left:(props.cell.x*50) + 450,
                height:40, width:40, 
                backgroundColor: BackgroundColorConfig, 
                position:'absolute'
            }}
        >
        </Animated.View></>
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