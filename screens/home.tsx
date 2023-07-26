import React from 'react';
import {View, Text, Pressable} from 'react-native';


const Home = ({ navigation })=>{

    const Play = ()=>{
        navigation.navigate('Playground');
    }
    
    return(
        <View>
            <Text>Home Screen</Text>
            <View>
                <Pressable onPress={Play}>
                    <Text>Play Quiz</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Home;