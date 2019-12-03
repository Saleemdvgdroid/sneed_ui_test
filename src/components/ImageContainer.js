import React from 'react';
import {View,Text,StyleSheet,Image,Dimensions} from 'react-native';
import ImageHeader from './ImageHeader';
const width = Dimensions.get('window').width;

function ImageContainer({title,asset,label,style}) {
    return (
        <View style = {[Style.container,style]}>
            <ImageHeader title={title} />
            <Image width = {width} resizeMode = 'stretch' style = {Style.imageStyle} source={asset}/>
            <Text numberOfLines = {2} style = {Style.textStyle}>{label}</Text>
        </View>
    )
}

const Style = StyleSheet.create({
    container:{
        width : '100%',
       borderBottomColor:'#efefef',
       borderBottomWidth:1,
       borderRadius:1
    },
    imageStyle:{
        flex:1 , 
        width: undefined,
        height: undefined,
        backgroundColor:'#000',
        borderWidth:1,
        borderColor:'#fefefe'
    },
    textStyle:{
        height:80,
        padding:20,
        fontSize:16,
        color:'grey'
    }
})

export default ImageContainer
