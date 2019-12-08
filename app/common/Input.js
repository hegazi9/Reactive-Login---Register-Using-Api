import React from 'react';
import {Text ,View, StyleSheet ,TextInput } from 'react-native';

 const  Input = (props) => 
{
    return(
<View style={styles.containerStyle}>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        placeholderTextColor = {props.placeholderTextColor}
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
            
            width : 320 , height : 20.5 , marginTop : 53 , marginLeft : 19.5  , marginRight : 20.5 , 
            alignSelf : "center" , color : '#2079EE' , fontSize : 13 , fontWeight : '200' , textAlign: 'center'
          },
          containerStyle: {
            alignItems: 'center',
            borderBottomWidth: 0.8,
            borderColor: '#ddd'
          }
        
    }
);


export { Input };