import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { Button } from 'react-native';
import Colors from '../constants/Colors';

export default function ChooseTeam(props) {
  return (
    <>
      <Button title="red team" color="red"/>
      <Button title="blue team" />
    </>
  );
}