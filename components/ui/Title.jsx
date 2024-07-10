import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

import Colors from '../../constants/colors'

const Title = ({title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Title


const styles = StyleSheet.create({
    
    title:{
        fontFamily:'open-sans-bold',
        fontSize: 24,
        //fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth:2,
        borderColor: Colors.accent500,
        padding: 12
    }

});