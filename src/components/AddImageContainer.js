import React from 'react'
import {TouchableOpacity,StyleSheet,Text} from 'react-native'

function AddImageContainer({placeHolder = '',style,onClickHandler}) {
    return (
       <TouchableOpacity
            onPress ={onClickHandler}
            style = {[Style.container,style]}>
            <Text style = {Style.textStyle}>{placeHolder}</Text>
       </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    container:{
        height : 320,
        backgroundColor:'rgb(227,227,227)',
        margin:15,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        color:'#000',
        textAlign:'center'
    }
})

export default AddImageContainer
