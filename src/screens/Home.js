import React, { Component } from 'react';
import {View, Text,TouchableOpacity,StatusBar,Image} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
import { FlatGrid } from 'react-native-super-grid';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[]
         };
    }

    getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then((json) => this.setState({data:json}))
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
                style={{backgroundColor:'#ffffff',paddingVertical:10,elevation:5,flexDirection:'row',paddingHorizontal:10}}
                >
                <TouchableOpacity>
                    <Icon name="bars" size={20} color="#8c8b8b" />
                </TouchableOpacity>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>                
                    <Text style={{color:'#8c8b8b',fontWeight:'bold',fontSize:18}}>Home </Text>
                </View>    
                <TouchableOpacity>
                    <Icon name="search" size={20} color="#8c8b8b" />
                </TouchableOpacity>
                </View>
                <View 
                    style={{flex:1,backgroundColor:'#ffffff'}}
                >
                    {/* content */}
                    <FlatGrid
                        itemDimension={300}
                        data={this.state.data}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                             style={{flex:1,backgroundColor:'#ffffff',elevation:3,borderRadius:3,flexDirection:'row'}}
                             onPress={()=> this.props.navigation.navigate('Show',
                             {
                                 title  : item.title,
                                 body   : item.body,
                                 image  : 'https://reactjs.org/logo-og.png'
                             }
                             )}
                             >
                                <View style={{justifyContent:'center',alignItems:'center'}}>
                                <Image source={{uri: 'https://reactjs.org/logo-og.png'}} style={{width:100,height:100}}/>
                                </View>
                                <View style={{flex:1,marginLeft:10,marginBottom:10}}>
                                    <Text style={{fontWeight:'bold',marginBottom:5}}>{item.title}</Text>
                                    <Text>{item.body.slice(0, 100)}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <View
                style={{backgroundColor:'#ffffff',paddingVertical:15,elevation:3,flexDirection:'row',paddingHorizontal:10}}
                >
                <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
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

export default Home;