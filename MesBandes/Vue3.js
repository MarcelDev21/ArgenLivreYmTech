import React from 'react';
import {View, TouchableOpacity} from 'react-native'

const Vue3 = () => {
    return (
        <View style={{flex:1, flexDirection:'row'}}>
            <TouchableOpacity style={{flex:1,backgroundColor:'lime', borderRadius:10, marginLeft:2}}>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'red', borderRadius:10, marginLeft:2}}>

            </TouchableOpacity>
            <TouchableOpacity style={{flex:1,backgroundColor:'violet', borderRadius:10, marginLeft:2}}>

            </TouchableOpacity>
       </View>
    );
};

export default Vue3;