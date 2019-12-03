import React, { Component } from 'react'
import {View,StyleSheet} from 'react-native'
import AddImageContainer from '../components/AddImageContainer';
import EditText from '../components/EditText';
import Button from '../components/Button';


class ScreenTwo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         imageText:''
      };
    };

    addImageClicked = () =>{
        console.log('touched to add image')
    }

    onChangeText = text =>{
        this.setState({
            imageText:text
        })
    }

    onButtonClicked = () =>{
        console.log('Button is pressed')
    }
    

    render() {
        const {imageText} = this.state
        return (
            <View style = {Style.container}>
                <AddImageContainer
                    onClickHandler = {()=>this.addImageClicked()}
                    style = {Style.addImageStyle}
                    placeHolder = {"Touch to Add Image"} />
                
                <EditText 
                style = {Style.editTextStyle}
                    value = {imageText}
                    onChangeText = {e=>this.onChangeText(e)}
                />
                
                <Button 
                    butonText = "Submit"
                    onButtonClicked ={()=>this.onButtonClicked()} />
            </View>
        )
    }
}

const Style = StyleSheet.create({
    container:{
        padding:15
    },
    addImageStyle:{
        marginTop:20
    },
    editTextStyle:{
        margin:20
    }
})

export default ScreenTwo
