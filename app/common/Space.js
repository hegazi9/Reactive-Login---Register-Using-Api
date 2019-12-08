
import React from 'react';
import {Text , StyleSheet  ,  View} from 'react-native';

const  Space = (props) => 
{
    return(
        <View style = {styles.circle} underlayColor = '#ccc' >
        
        </View >
    );

} 

export { Space }  ;

const styles = StyleSheet.create(
    {
        circle :
       {
       
        width: 360,
        height: 50,
        marginTop : 10 , 
        backgroundColor:'#20B3E7',
        justifyContent: 'center',
        alignItems: 'center' 

       },

    });

