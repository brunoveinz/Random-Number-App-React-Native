import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'


const PrimaryButton = ({title, onPress}) => {
  
  return (
      <View style={styles.buttonOuterContainer}>
        <Pressable 
          style={({pressed}) =>
          pressed 
          ? [styles.buttonInnerContainer, styles.pressed] 
          : styles.buttonInnerContainer
      
          } 
          onPress={onPress}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
      </View>
  )
}

export default PrimaryButton;




const styles = StyleSheet.create({
  buttonOuterContainer : {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden"
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },

  pressed:{
    opacity: 0.75,
  }
});


