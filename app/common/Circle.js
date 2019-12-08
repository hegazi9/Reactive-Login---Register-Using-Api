
import React from 'react';
import {Text , StyleSheet  ,  View} from 'react-native';

const  Circle = (props) => 
{
    return(
        <View style = {styles.circle} underlayColor = '#ccc' >
        
        </View >
    );

} 

export { Circle }  ;

const styles = StyleSheet.create(
    {
        circle :
       {
        borderRadius: 90,
        width: 164.46,
        height: 164.46,
        marginLeft : 100 , marginRight : 97.61 , marginTop : 121.23 , 
        backgroundColor:'#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center' 

       },
       ktf : 
       {
        borderRadius: 70,
        width: 92.43,
        height: 31.03,
        marginLeft : 133.01 , marginRight :134.56 , marginTop : 130 , 
        backgroundColor:'#AFD8E5',
        justifyContent: 'center',
        alignItems: 'center' 
    
       }


    });

