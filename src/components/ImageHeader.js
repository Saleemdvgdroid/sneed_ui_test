import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faSearch,faHeart,faRedoAlt,faEllipsisV} from '@fortawesome/free-solid-svg-icons'
function ImageHeader({title}) {
    return (
        <View style = {Style.container}>
            <Text style = {Style.titleStyle}>{title}</Text>
            <View style = {Style.iconContainer}>
                <TouchableOpacity style = {Style.iconStyle} >
                    <FontAwesomeIcon 
                        size = {22} 
                        color = "#fff" 
                        icon={faSearch} />
                </TouchableOpacity>  
                <TouchableOpacity  style = {Style.iconStyle} >
                    <FontAwesomeIcon 
                        size = {22} 
                        color = "#fff" 
                        icon={faHeart} />
                </TouchableOpacity>   
                <TouchableOpacity style = {Style.iconStyle} > 
                    <FontAwesomeIcon 
                        size = {22} 
                        color = "#fff" 
                        icon={faRedoAlt} />
                 </TouchableOpacity>    
                <TouchableOpacity style = {Style.iconStyle} >
                    <FontAwesomeIcon 
                        size = {22} 
                        color = "#fff" 
                        icon={faEllipsisV} /> 
                 </TouchableOpacity>   

            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        height:58,
        flexDirection:'row',
        backgroundColor:'rgb(47,66,173)',
        paddingLeft:20,
    },
    titleStyle:{
        flex:0.5,
        alignSelf:'center',
        fontWeight:'600',
        fontSize:20,
        color:'#fff',
    },
    iconContainer:{
        flex:0.5,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'flex-end'
    },
    iconStyle:{
        marginStart:23
    }
})

export default ImageHeader
