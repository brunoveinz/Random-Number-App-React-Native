import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const InstructionText = ({title, personalStyle}) => {
  return (
    <View>
        <Text style={[styles.instructionText, personalStyle]}>{title}</Text>
    </View>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    instructionText:{
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24 
    },
});
