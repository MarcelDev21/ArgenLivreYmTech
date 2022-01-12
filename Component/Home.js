import React from 'react';
import {View, Text , Button} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Vue1 from '../MesBandes/Vue1';
import Vue2 from '../MesBandes/Vue2';
import Vue3 from '../MesBandes/Vue3';

const Home = () => {

    const navigation = useNavigation()

    const Envoyer = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={{flex:1}}>
            {/* <Text> testons</Text>
            <Button 
            title="mon Titre"
            onPress={()=> Envoyer()}/> */}
            <Vue1/>
            <Vue2/>
            <Vue3/>

        </View>
    );
};

export default Home;