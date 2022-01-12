import React,{useState} from 'react';
import {View,Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core';

const Vue1 = () => {
    const [state, setState]= useState()
    const navigation = useNavigation()

    const AllerVersEntrepreneuriat = () => {
        console.log("je teste")
        navigation.navigate('Profile')
    }

    return (
        <View style={{flex:1, flexDirection:'row'}}>
            <TouchableOpacity
             style={{flex:1,backgroundColor:'lime', borderRadius:10, marginLeft:2}}
             onPress={() => AllerVersEntrepreneuriat()}>
                <Text>testons</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'red', borderRadius:10, marginLeft:2}}>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'violet', borderRadius:10, marginLeft:2}}>

            </TouchableOpacity>
        </View>
    );
};

export default Vue1;