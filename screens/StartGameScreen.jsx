import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText)
  }

  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
      Alert.alert('invalid number', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style:'destructive', onPress:resetInputHandler }])
      return;
    }

    onPickNumber(chosenNumber)
  };

  function resetInputHandler(){
    setEnteredNumber('')
  }
  
  return (
    <View  style={styles.rootContainer}>
      <Title title='Inicio del Juego'/>
      <Card>
        <InstructionText title="ingrese un numero "/>

      
        <TextInput 
          style={styles.numberInput} 
          maxLength={2} 
          keyboardType='number-pad' 
          autoCapitalize='none' 
          autoCorrect={false}
          onChangeText={numberInputHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Confirm" onPress={confirmInputHandler}/>        
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Reset" onPress={resetInputHandler}/>
          </View>
        </View>
      </Card>      
    </View>

  )
}

export default StartGameScreen

const styles = StyleSheet.create({

  rootContainer:{
    flex:1,
    marginTop: 100,
    alignItems: 'center'
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500 ,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  buttonsContainer: {
    flexDirection: 'row'
  },
  
  buttonContainer:{
    flex:1,
  }
});