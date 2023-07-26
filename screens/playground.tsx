import React from 'react';
import {View, Text, Pressable} from 'react-native';


const play = ({ navigation })=>{

    const HomePage = ()=>{
        navigation.navigate('Home');
    }
    
    return(
        <View>
            <Text>Play Screen</Text>
            <View>
                <Pressable onPress={HomePage}>
                    <Text>Go Back</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default play;