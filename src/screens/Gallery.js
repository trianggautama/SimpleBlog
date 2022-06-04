import React, { Component } from 'react';
import {View, Text,StatusBar,TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: []
         };
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((json) => {
            let data = [];
            for(let i = 0; i < 10; i++)
            {
                data.push(json[i])
            }
            this.setState({data})
        })
        .catch((err) => console.log(err))
      }

    componentDidMount(){ 
        this.getData()
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
                <Text style={{color:'#8c8b8b',fontWeight:'bold',fontSize:18}}>Gallery </Text>
            </View>    
            <TouchableOpacity>
                <Icon name="search" size={20} color="#8c8b8b" />
            </TouchableOpacity>
            </View>
            <View 
                style={{flex:1,backgroundColor:'#ffffff',paddingHorizontal:10,paddingVertical:10}}
            >
             <FlatGrid
                itemDimension={120}
                data={this.state.data}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{flex:1,backgroundColor:'#ffffff',elevation:3,borderRadius:3,padding:5}}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={{uri: item.url}} style={{width:100,height:100,borderRadius:50}}/>
                        </View>
                        <View style={{flex:1,marginLeft:10,alignItems:'center',justifyContent:'center'}}>
                            <Text >{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />

            </View>
            <View
            style={{backgroundColor:'#ffffff',paddingVertical:15,elevation:3,flexDirection:'row',paddingHorizontal:10}}
            >
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => this.props.navigation.navigate('Home')}>
                <Icon name="home" size={20} color="#8c8b8b" />
            </TouchableOpacity>
            <TouchableOpacity  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Icon name="folder-open" size={20} color="#FF5D5D" />
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

export default Gallery;