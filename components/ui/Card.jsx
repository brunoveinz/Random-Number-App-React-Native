import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({children}) => {
  return (
    <View style = {styles.card}>
      {children}
    </View>
  )
}

export default Card

const deviceWith = Dimensions.get('window').width;

const styles = StyleSheet.create({

    card:{
        justifyContent: 'center' ,
        alignItems: 'center',
        marginTop: deviceWith < 380 ? 18 : 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 1 
        },
});