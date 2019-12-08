import React , {Component}from 'react';
import { StyleSheet, Text, View  , Image , Alert  } from 'react-native';
import { CustomInput , EntryButton  } from './common';
import { Location } from 'expo' ;
import * as Permissions from 'expo-permissions';

export default class Post_Location extends Component 
{
    constructor(props)
    {
        super(props);
        this.state = {  latitude : '' , longitude : '' , area : '' , address : '' ,
         error_message : '' , userlocation :{}}
    
    }
  
    
    static navigationOptions = {header: null}

    
    _updatedata(text , field)
    {
        if (field == 'area')
        {
            this.setState({area:text});
        }
       else if (field == 'address')
        {
            this.setState({address:text});
        }
        else if (field == 'latitude')
        {
            this.setState({latitude:text});
        }
        else if (field == 'longitude')
        {
            this.setState({longitude:text});
        }
    }


    Get_Location = async () => {
        let collection = 
        { 
            area : this.state.area , 
            address : this.state.address
         }
         
        console.log(collection);
        fetch('https://rn-task.dtagdev.com/api/post/location', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(collection)
        }).then(res => res.json())
        .catch(error => console.error('Error : ' , error))
        .then(response => console.log('Success : ' , response));
       }




render() {
    return (
        <View style = {{ backgroundColor : '#20B3E7'  ,width :360 , height : 740 }}>
        <Text style = {styles.txt}> ارسال الموقع </Text>
        <Image source={require('../assets/images/GoogleMapTA.png')} style={{width :336 , height : 210 ,
             marginRight : 12 , marginLeft : 12 , marginTop : 25}}/>
        
        
        <CustomInput  placeholder = ' المنطقة ' placeholderTextColor = '#000000' placeholderalignSelf = 'center'
             onChangeText = {(text) => this._updatedata(text , 'area')}
            ></CustomInput>

            <CustomInput  placeholder = '  العنوان ' placeholderTextColor = '#000000' placeholderalignSelf = 'center'
             onChangeText = {(text) => this._updatedata(text , 'address')} ></CustomInput>
        
        
        <EntryButton onPress ={this.Get_Location.bind(this)}> ارسال </EntryButton>
        </View>
    );
}
}

const styles = StyleSheet.create(
{
    txt : 
    {
        width : 116 , height : 38 , marginTop : 53 , marginLeft : 122 , marginRight : 122 , 
        alignSelf : "center" , color : '#FFFFFF' , fontSize : 20 , fontWeight : '600'
        
    }

});

  /*
      componentDidMount()
        {
            this._getLocation();
        }
        _getLocation = async ()=> {
            const {status} = await Permissions.askAsync(Permissions.Location);
            if (status !== 'granted')
            {
                console.log("Permission Not Granted");
                this.setState({error_message : 'Permission Not Granted'});
            }

            const userlocation = await Location.getCurrentPositionAsync();
            this.setState({userlocation});
        } 
*/