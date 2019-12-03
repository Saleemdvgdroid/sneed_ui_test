import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'

function Button({butonText = '',onButtonClicked}) {
    return (
        <View style = {Style.container}>
            <TouchableOpacity style = {Style.buttonContainer}
                    onPress = {onButtonClicked}>
                <Text style = {Style.labelStyle}>{butonText.toUpperCase()}</Text>
            </TouchableOpacity>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer:{
        width: '60%',
        backgroundColor:'rgb(47,66,173)',
        justifyContent:'center',
        alignItems:'center',
        minHeight: 56,
    },
    labelStyle:{
        textAlign:'center',
        color:'#fff',
        fontSize:18,
        fontWeight:'400'
    }
})

export default Button
