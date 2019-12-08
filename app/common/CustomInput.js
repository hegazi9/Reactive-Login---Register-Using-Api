import React from 'react';
import {Text ,View, StyleSheet ,TextInput } from 'react-native';

 const  CustomInput = (props) => 
{
    return(
<View >
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor = {props.placeholderTextColor}
        placeholderalignSelf={props.placeholderalignSelf}
        autoCorrect={props.autoCorrect}
        style={styles.inputStyle}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create(

    {

        inputStyle: {
            
            borderRadius : 13  , width : 302.82 ,
            backgroundColor : '#FFFFFF'  , height : 52 , justifyContent : 'center' ,
            marginTop : 20 , marginLeft : 26 , marginRight : 31.18 , alignSelf : "center" ,
            fontSize : 13 , fontWeight : '200' , textAlign: 'center'
 
          }
}
        
    
);


export { CustomInput };