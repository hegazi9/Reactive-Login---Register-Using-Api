import React , {Component}from 'react';
import { Alert, View  , Image} from 'react-native';
import {  CustomInput , Circle, EntryButton, ButtonLine, Space } from './common';


export default class Login extends Component 
{
    
    constructor(props)
    {
        super(props);
        this.state = {  email : '' , password : '' }
    }
    static navigationOptions = {header: null}

   
    _onRegisterPressed()
    {
        this.props.navigation.navigate('Register');
    }
   
    
    _onLoginPressed()
    {
        this.props.navigation.navigate('Post_Location');
    }
   
    _updatedata(text , field)
    {
        if (field == 'email')
        {
            this.setState({email:text});
        }
       else if (field == 'password')
        {
            this.setState({password:text});
        }
    }

    Log_In = async () => {
        let collection = 
        { 
            email : this.state.email , 
            password : this.state.password
         }
         
        console.log(collection);
        fetch('https://rn-task.dtagdev.com/api/login', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(collection)
       }).then(res => res.json())
        .catch(error => console.error('Error : ' , error))
        .then(response => console.log('Success : ' , response))
        .then( this._onLoginPressed());
       }


render() {
    return (
        <View style = {{ backgroundColor : '#20B3E7' , width : 360 , height : 740}}>
            <Circle/>

            <Image source={require('../assets/images/pic.png')} style={{width :125 , height : 130 , borderRadius : 60,
             marginRight : 150 , marginLeft : 120 , marginTop : -126}}/>
             
            <Space/>
            <CustomInput  placeholder = ' الايميل ' placeholderTextColor = '#000000' placeholderalignSelf = 'center'
            secureTextEntry = {false} onChangeText = {(text) => this._updatedata(text , 'email')}
            ></CustomInput>

            <CustomInput  placeholder = ' الرقم السرى ' placeholderTextColor = '#000000' placeholderalignSelf = 'center'
            secureTextEntry = {true} onChangeText = {(text) => this._updatedata(text , 'password')} ></CustomInput>

            <EntryButton onPress ={this.Log_In.bind(this)}> دخـول </EntryButton>
            <ButtonLine onPress ={this._onRegisterPressed.bind(this)}> ليس لديك حساب ؟ قم بالتسجيل الأن </ButtonLine>
        
        </View>
    );
}
}

