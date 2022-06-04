import React, { Component } from 'react';
import {View, Text,StatusBar,TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View style={{flex:1}}>
            <StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
            <View
            style={{backgroundColor:'#ffffff',paddingVertical:10,elevation:3,flexDirection:'row',paddingHorizontal:10}}
            >
            <TouchableOpacity onPress={() => this.props.navigation.pop()}>
                <Icon name="chevron-left" size={20} color="#8c8b8b" />
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>                
                <Text style={{color:'#8c8b8b',fontWeight:'bold',fontSize:18}}>Home </Text>
            </View>    
            <TouchableOpacity>
                <Icon name="search" size={20} color="#8c8b8b" />
            </TouchableOpacity>
            </View>
            <View 
                style={{flex:1,backgroundColor:'#ffffff',paddingHorizontal:20,paddingVertical:10}}
            >
                <View style={{justifyContent:'center',alignItems:'center',marginBottom:10}}>
                    <Image 
                        source={{
                            uri: this.props.route.params.image
                        }} 
                        style={{width:250,height:250,borderRadius:5}}
                    />
                </View>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:16}}>{this.props.route.params.title}</Text>
                    <Text style={{textAlign:'justify'}}>{this.props.route.params.body}</Text>
                </View>
            </View>
            <View
            style={{backgroundColor:'#ffffff',paddingVertical:15,elevation:3,flexDirection:'row',paddingHorizontal:10}}
            >
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}>
                <Icon name="home" size={20} color="#FF5D5D" />
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon name="folder-open" size={20} color="#8c8b8b" />
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon name="heart" size={20} color="#8c8b8b" />
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon name="user" size={20} color="#8c8b8b" />
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon name="cogs" size={20} color="#8c8b8b" />
            </TouchableOpacity>
            </View>
        </View>
        );
    }
}

export default Show;