
import React from 'react';
import {Text , StyleSheet  ,  View} from 'react-native';

const  RegisterSpace = (props) => 
{
    return(
        <View style = {styles.circle} underlayColor = '#ccc' >
        
        </View >
    );

} 

export { RegisterSpace }  ;

const styles = StyleSheet.create(
    {
        circle :
       {
       
        width: 360,
        height: 30,
        marginTop : 5 , 
        backgroundColor:'#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center' 

       },

    });

