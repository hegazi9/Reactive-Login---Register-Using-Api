import React from 'react';
import {Text , StyleSheet , TouchableOpacity} from 'react-native';

const  ButtonLine = (props) => 
{
    return(
        <TouchableOpacity style = {styles.button} onPress = {props.onPress}>
        <Text style = {styles.textstyle}> {props.children} </Text>
        </TouchableOpacity>
    );

} 

export { ButtonLine }  ;

const styles = StyleSheet.create(
    {
       button :
       {
           marginTop : 17 , marginBottom : 32 ,  marginRight : 101 , marginLeft : 99 ,
             height : 19 , width : 160 ,  justifyContent : 'center' 

       },
       textstyle : 
       {
           alignSelf : "center" , color : '#FFFFFF' , fontSize : 11 , fontWeight : '600' , paddingBottom : 10 ,
           paddingTop : 10  }

    });

