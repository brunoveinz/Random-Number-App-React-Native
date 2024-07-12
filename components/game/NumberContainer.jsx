import { View, Text, StyleSheet, Dimensions} from 'react-native'
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



const deviceWith = Dimensions.get('window').width

const styles = StyleSheet.create({

    container:{
        borderWidth: 4,
        borderColor: 'white',
        padding: deviceWith < 380 ? 12 : 24,
        margin: deviceWith < 380 ? 12 : 24,
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