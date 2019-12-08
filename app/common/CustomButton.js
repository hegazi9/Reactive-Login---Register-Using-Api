import React from 'react';
import {Text , StyleSheet , TouchableOpacity} from 'react-native';

const  CustomButton = (props) => 
{
    return(
        <TouchableOpacity style = {styles.button} onPress = {props.onPress}>
        <Text style = {styles.textstyle}> {props.children} </Text>
        </TouchableOpacity>
    );

} 

export { CustomButton }  ;

const styles = StyleSheet.create(
    {
       button :
       {
           borderRadius : 13  , width : 302.82 ,
           backgroundColor : '#FFFFFF'  , height : 52 , justifyContent : 'center' ,
           marginTop : 20 , marginLeft : 26 , marginRight : 31.18

       },
       textstyle : 
       {
           alignSelf : "center" , color : 'black' , fontSize : 16 , fontWeight : '300' , paddingBottom : 10 ,
           paddingTop : 10 
       }

    });

