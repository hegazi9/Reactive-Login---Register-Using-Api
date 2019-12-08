import React from 'react';
import {Text , StyleSheet , TouchableOpacity} from 'react-native';

const  EntryButton = (props) => 
{
    return(
        <TouchableOpacity style = {styles.button} onPress = {props.onPress}>
        <Text style = {styles.textstyle}> {props.children} </Text>
        </TouchableOpacity>
    );

} 

export { EntryButton }  ;

const styles = StyleSheet.create(
    {
       button :
       {
           borderRadius : 13  , width : 108 ,
           backgroundColor : '#20D7E3'  , height : 37 , justifyContent : 'center' ,
           marginTop : 70 , marginLeft : 126 , marginRight : 126

       },
       textstyle : 
       {
           alignSelf : "center" , color : '#FFFFFF' , fontSize : 16 , fontWeight : '300' , paddingBottom : 10 ,
           paddingTop : 10 
       }

    });

