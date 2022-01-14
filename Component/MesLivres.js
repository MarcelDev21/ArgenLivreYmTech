import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, FlatList} from 'react-native'
import { useNavigation } from '@react-navigation/core';
import Vue1Component from './Vue1Component';

const MesLivres = () => {
    const navigation = useNavigation()

    const AllerADetail = (typeBusiness) => {
        console.log("aller a detail")
        navigation.navigate('DetailFilm', {params:typeBusiness})
    }

    const Acheter = () => {
        console.log("acheter")
        /*<FlatList
        data={{key:"a"}}
        keyExtractor={()=> item.id.toString()}
        renderItem={({item}) => <Vue1Component/>}/>*/
    }

    return (
      <TouchableOpacity
         style={styles.main_container}
         onPress={() => AllerADetail("Entreprenariat")}>
        <Image
          style={styles.image}
          //source={{uri: "uri"}}
          source={require('../Images/pauvre.jpg')}
        />
        <View style={styles.content_container}>
          <View style={styles.header_container}>
            <Text style={styles.title_text}>Les Pauvres sont egoistes</Text>
            {/* <Text style={styles.vote_text}>text</Text> */}
            <TouchableOpacity
            onPress={() => Acheter()}>
                    <Image
                    style={{width:30, height:30, alignItems:'flex-start'}}
                    source={require('../Images/shopping.png')}/>
              </TouchableOpacity>
          </View>
          <View style={styles.description_container}>
            <Text style={styles.description_text} numberOfLines={6}>Les Pauvres sont egoistes.Les Pauvres sont egoistes.Les Pauvres sont egoistes.Les Pauvres sont egoistes.Les Pauvres sont egoistes.
            Les Pauvres sont egoistes.Les Pauvres sont egoistes.Les Pauvres sont egoistes.Les Pauvres sont egoistes.Les Pauvres sont egoistes.
            Les Pauvres sont egoistes.Les Pauvres sont egoistes.Les Pauvres sont egoistes.Les Pauvres sont egoistes.</Text>
          </View>
          <View style={styles.date_container}>
            <Text style={styles.date_text}>Sorti le </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({  
    main_container: {
        height: 190,
        flexDirection: 'row'
      },
      image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
      },
      content_container: {
        flex: 1,
        margin: 5
      },
      header_container: {
        flex: 3,
        flexDirection: 'row'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
      vote_text: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
      },
      description_container: {
        flex: 7
      },
      description_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
      date_container: {
        flex: 1
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      },
      favorite_image: {
        width: 25,
        height: 25,
        marginRight: 5
      }
})

export default MesLivres;