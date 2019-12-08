import React , {Component}from 'react';
import { StyleSheet, Text, View , Alert } from 'react-native';
import { Icon } from 'native-base' ;
import {  CardItem, EntryButton, Input, RegisterSpace } from './common';

    
const url = 'https://rn-task.dtagdev.com/api/register' ; 

export default class Register extends Component 
{

    constructor(props)
    {
        super(props);
        this.state = { name : '', email : '' , password : '' , password_confirmation : '', auth_token: false}
    }
	
    static navigationOptions = {header: null}

     
    _onBackPressed()
    {
        this.props.navigation.navigate('Login');
    }

    _updatedata(text , field)
    {
        if (field == 'name')
        {
            this.setState({name:text});
        }
       else if (field == 'email')
        {
            this.setState({email:text});
        }
       else if (field == 'password')
        {
            this.setState({password:text});
        }
        else if  (field == 'password_confirmation')
        {
            this.setState({password_confirmation:text});
        }
        console.log (text);
    }

    Signup = async () => {
        let collection = { name : this.state.name , 
            email : this.state.email , 
            password_confirmation : this.state.password_confirmation ,
            password : this.state.password }
         
        console.log(collection);
        fetch('https://rn-task.dtagdev.com/api/register', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(collection)
        }).then(response => response.json(), response => console.log(response)) 
        .catch(error => console.error('Error : ' , error))
        .then( this._onBackPressed());

               
       }
       
    
/*
,Alert.alert("Sign Up Not Successfully !")
,this.props.navigation.navigate('Login')
*/

render() {
    return (
        <View style = {{ backgroundColor : '#FFFFFF' , width : 360 , height : 740}}>
        <View style = {{ backgroundColor : '#20B3E7' , width : 360 , height : 106}}>
            <CardItem>
            <Icon name='arrowleft' type ="AntDesign" style = {{marginTop : 53 , marginLeft : 12 
                 , color : '#FFFFFF'}} onPress ={this._onBackPressed.bind(this)}/>
            <Text style = {styles.txt}> تسجيل البيانات كمستخدم </Text>
            </CardItem>
        </View> 

       
        <Input  placeholder = ' الاسم ' placeholderTextColor = '#2079EE' placeholderalignSelf = 'center'
        secureTextEntry = {false} onChangeText = {(text) => this._updatedata(text , 'name')}
        ></Input>
        <RegisterSpace/>


        <Input  placeholder = ' الايميل ' placeholderTextColor = '#2079EE' placeholderalignSelf = 'center'
        secureTextEntry = {false} onChangeText = {(text) => this._updatedata(text , 'email')} ></Input>
        <RegisterSpace/>


        <Input  placeholder = ' الباسورد ' placeholderTextColor = '#2079EE' placeholderalignSelf = 'center'
        secureTextEntry = {false} onChangeText = {(text) => this._updatedata(text , 'password')} ></Input>
        <RegisterSpace/>


        <Input  placeholder = ' تأكيد الباسورد ' placeholderTextColor = '#2079EE' placeholderalignSelf = 'center'
        secureTextEntry = {false} onChangeText = {(text) => this._updatedata(text , 'password_confirmation')}></Input>
        <RegisterSpace/>



        <EntryButton onPress = {this.Signup.bind(this)}> تسجيل </EntryButton>        


        </View>
    );
}
}

const styles = StyleSheet.create(
    {
        txt : 
        {
            width : 219 , height : 38 , marginTop : 53 , marginLeft : 71  , 
            alignSelf : "center" , color : '#FFFFFF' , fontSize : 20 , fontWeight : '500'
            
        } , 
    
    });