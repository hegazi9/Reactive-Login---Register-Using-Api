import React from 'react';
import {View, StyleSheet  } from 'react-native';

const  CardItem = (props) => 
{
    return(
       <View style = {styles.carditemstyle}>{props.children}</View>
    );

} 


const styles = StyleSheet.create(
    {
       carditemstyle :
       {
        padding : 5 , backgroundColor : '#20B3E7' , justifyContent : 'flex-start' ,
         flexDirection : 'row',
       }
    });
    
    export { CardItem }  ;
