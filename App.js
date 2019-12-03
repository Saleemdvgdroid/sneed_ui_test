import React from 'react';
import {SafeAreaView,Text} from 'react-native';
import FAB from './src/components/FAB';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';
class App extends React.Component{
  render(){
    return(
        <SafeAreaView style = {{flex:1}}>
         <ScreenOne />
         {/* <ScreenTwo /> */}
        </SafeAreaView>
    )
  }
}
export default App;