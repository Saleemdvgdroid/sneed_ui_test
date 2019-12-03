import React from 'react'
import {TouchableOpacity,StyleSheet,Text,View} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faPlus} from  '@fortawesome/free-solid-svg-icons'

function FAB({onClickHandler,style}) {
    return (
        <View style = {[ButtonStyle.buttonHolder,style]}>
            <TouchableOpacity 
                    style = {ButtonStyle.buttonContainer}
                    onPress = {onClickHandler}>
               <FontAwesomeIcon icon = {faPlus} color = {'#fff'} />
            </TouchableOpacity>
        </View>
    )
}

const ButtonStyle = StyleSheet.create({
    buttonHolder:{
        marginTop:12,
        height:'10%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    buttonContainer:{
        width: 65,
        height:65,
        borderRadius:65,
        borderWidth:1,
        borderColor:'#ffffff',
        backgroundColor:'rgb(47,66,173)',
        justifyContent:'center',
        alignItems:'center',
    },
    labelStyle:{
        fontWeight:'300',
        fontSize:24,
        color:'#ffffff',
        lineHeight:50
    }
})

export default FAB
