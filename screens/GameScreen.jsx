import { View, StyleSheet, Alert, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import Title from '../components/ui/Title'
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { MaterialIcons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min,max,exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if(rndNum === exclude) {
        return generateRandomBetween(min,max,exclude);
    }else{
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
  const initialGuess = generateRandomBetween(1, 100, userNumber) 
  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  const [guessRound, setGuessRound] = useState([initialGuess])


  useEffect( () => {
    minBoundary = 1;
    maxBoundary = 100;
  },[])

  useEffect( () => {
    if (currentGuess === userNumber){
        onGameOver(guessRound.length);
    }
  }, [currentGuess, userNumber, onGameOver]);


  function NewRandomNumber(direction){

    if ( (direction === 'lower' && currentGuess < userNumber ) || (direction === 'greater' && currentGuess > userNumber)) {
        Alert.alert("Don't lie!", 'You know that this is wrong..', [{text: 'Sorry'}])      
        return;
    }
    if (direction === 'lower'){
        maxBoundary = currentGuess - 1 
    }
    else{
        minBoundary = currentGuess + 1
    }
    const newRandom = generateRandomBetween(maxBoundary, minBoundary, currentGuess)
    setCurrentGuess(newRandom);

    setGuessRound( prevGuessRounds => [newRandom, ...prevGuessRounds]);
  }

  const guessRoundsListLenght = guessRound.length;

  return (
    <View style={styles.screen}>
        <Title title='Adivina el Numero!'/>
        <NumberContainer number={currentGuess} />
        <Card>
            <InstructionText personalStyle={styles.instructionText} title='Higher or lower?'/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <PrimaryButton title = "+" onPress={NewRandomNumber.bind(this, 'greater')} />

                </View>
                <View style={styles.button}>
                    <PrimaryButton title='-' onPress={NewRandomNumber.bind(this, 'lower')}/>
                </View>
            </View>   
        </Card>  
        <View style={styles.listContainer}>
            <FlatList 
                data={guessRound} 
                renderItem={ (itemData) => <GuessLogItem roundNumber={ guessRoundsListLenght - itemData.index} guess={itemData.item} /> }
                keyExtractor = { (item) => item }    
            />
        </View>
    </View>
  )
}

export default GameScreen


const styles = StyleSheet.create({
    
    screen:{
        flex: 1,
        padding: 12,
    },

    buttonContainer: {
        flexDirection: 'row'
    },

    button:{
        flex: 1
    },

    instructionText:{
        marginBottom: 20
    },

    listContainer: {
        flex: 1,
        padding: 16
    }
});