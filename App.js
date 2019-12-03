import React from 'react';
import {SafeAreaView,Text} from 'react-native';
import FAB from './src/components/FAB';
import ScreenOne from './src/screens/ScreenOne';
import ScreenTwo from './src/screens/ScreenTwo';

import { library } from '@fortawesome/fontawesome-svg-core'
import {fas, faSearch,faHeart,faRedoAlt,faEllipsisV } from '@fortawesome/free-solid-svg-icons'
library.add(fas,faSearch,faHeart,faRedoAlt,faEllipsisV);

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