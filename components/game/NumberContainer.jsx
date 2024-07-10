import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'


const NumberContainer = ({number}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}> {number} </Text>
    </View>
  )
}

export default NumberContainer;


const styles = StyleSheet.create({

    container:{
        borderWidth: 4,
        borderColor: 'white',
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    numberText: {
        color: 'white',
        fontSize: 36,
        //fontWeight: 'bold'
        fontFamily: 'open-sans-bold',
    }
});