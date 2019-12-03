import React, { Component } from 'react'
import {View,ScrollView,Dimensions} from 'react-native'
import FAB from '../components/FAB';
import ImageContainer from '../components/ImageContainer';

class ScreenOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             swiperArray : [{title:'Title', imageUrl:require('../img/dummy.png'),imageDescription:'Image description text goes here. Image description text goes here'},
             {title:'Title',imageUrl:require('../img/dummy.png'),imageDescription:'Image description text goes here. Image description text goes here.Image description text goes here '},
             {title:'Title',imageUrl:require('../img/dummy.png'),imageDescription:'Description Image description text goes here'}]
        }
    }
    

    onButtonClicked = () =>{
        console.log('Yo button pressed');
    }

    getSwipeView = () =>{
        let view = [];
        const {swiperArray} = this.state
        const width = Dimensions.get('window').width;
        swiperArray.map((it,index) => {
           view.push(<ImageContainer 
                            key = {index} 
                            style = {{width :width}} 
                            asset = {it.imageUrl} 
                            title = {it.title}
                            label = {it.imageDescription} />)
        });
        return view;
    }

    render() {
        return (
            <View style = {{flex:1}}>
                <ScrollView 
                    horizontal 
                    pagingEnabled
                    showsHorizontalScrollIndicator = {false}
                    style = {{flex:0.85}}>
                    {this.getSwipeView()}
                </ScrollView>
                
                <FAB style = {{flex:0.15}} onClickHandler = {()=> this.onButtonClicked()}/>
            </View>
        )
    }
}

export default ScreenOne
