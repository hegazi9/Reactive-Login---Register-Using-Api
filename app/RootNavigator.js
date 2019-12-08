import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './Login';
import Register from './Register';
import Post_Location from './Post_Location';


const  AppNavigator  = createStackNavigator ({
   
    Login : { screen: Login},
    Register : { screen: Register },
    Post_Location : { screen : Post_Location },
    
    
    
    
    });

    const App = createAppContainer(AppNavigator);

export default App ;
