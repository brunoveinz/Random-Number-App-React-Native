import { View, Text, TextInput, SafeAreaView, StyleSheet, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

const StartGameScreen = ({onPickNumber}) => {
  const [enteredNumber, setEnteredNumber] = useState('')

  const { width, height } = useWindowDimensions();


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

  const marginTopDistance = height < 400 ? 30 : 100;
  
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View  style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

  screen: {
    flex: 1
  },

  rootContainer:{
    flex:1,
  //  marginTop: deviceHeight < 400 ? 30 : 100,
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