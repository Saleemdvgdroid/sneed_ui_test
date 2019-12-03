import React from 'react'
import {TextInput,StyleSheet} from 'react-native'

function EditText({
                placeHolderText = 'Placeholder',
                value,onChangeText,style}) {
    return (
           <TextInput 
                placeholder = {placeHolderText}
                placeholderTextColor = {'grey'}
                style = {[Style.textInputStyle,style]}
                onChangeText = {onChangeText}
                value = {value}
            />
    )
}

const Style = StyleSheet.create({
    textInputStyle:{
        borderBottomColor: '#cccccc',
        borderBottomWidth:1,
        paddingBottom:20,
        fontSize:20
    }
})

export default EditText
