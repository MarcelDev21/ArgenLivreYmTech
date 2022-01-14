import React,{useState} from 'react';
import {View,Text, TouchableOpacity, Image, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/core';

const Vue1 = (props) => {
    const [state, setState]= useState()
    const navigation = useNavigation()

    const AllerVersEntrepreneuriat = () => {
        console.log("je teste")
        navigation.navigate('Profile')
    }

    return (
        <View style={{flex:1, flexDirection:'row'}}>
            {console.log(props)}
            <TouchableOpacity
             style={{flex:1,backgroundColor:'grey', borderRadius:10, marginLeft:2, alignItems:'center'}}
             onPress={() => AllerVersEntrepreneuriat()}>
                <Image
                style={{width:120, height:120, marginTop:20}}
                source={require('../Images/teamwork.png')}/>
                <Text> Livre sur l'Entrepreneur</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => AllerVersEntrepreneuriat()}
             style={{flex:1,backgroundColor:'red', borderRadius:10, marginLeft:2, alignItems:'center'}}>
                 <Image
                style={{width:120, height:120, marginTop:20}}
                source={require('../Images/teamwork.png')}/>
                <Text> Livre sur le developpement Personnel</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => AllerVersEntrepreneuriat()}
            style={{flex:1,backgroundColor:'violet', borderRadius:10, marginLeft:2, alignItems:'center'}}>
                 <Image
                style={{width:120, height:120, marginTop:20}}
                source={require('../Images/teamwork.png')}/>
                <Text> Livre sur le developpement Personnel</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Vue1;