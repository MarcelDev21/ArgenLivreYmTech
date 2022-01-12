import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native'
const Vue2 = () => {
    return (
        <View style={{flex:1, flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'pink', borderRadius:10, marginLeft:2}}>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'violet', borderRadius:10, marginLeft:2}}>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'green', borderRadius:10, marginLeft:2}}>

            </TouchableOpacity>
    </View>
    );
};

export default Vue2;