import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'


const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title title="Game Over"/>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={ require('../assets/images/success.png')  }/>
      </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame} title="Start New Game"/>
    </View>
  )
}

export default GameOverScreen


const styles = StyleSheet.create({

  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36
  },

  image:{
    width: '100%',
    height: '100%',
  },

  rootContainer:{
    flex:1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },

  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24
  },

  highlight:{
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }

});