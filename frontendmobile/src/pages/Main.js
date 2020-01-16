import React, { useEffect, useState } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Image, View, Text } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({ navigation }) {
    const [currentRegion, setcurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();

            if (granted) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,                    
                });

                // console.log(coords);

                const { latitude, longitude } = coords;

                setcurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                })
            }
        }

        loadInitialPosition();
    }, []);

    if (!currentRegion) {
        return null;
    }

    return (
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{ latitude: -16.4593664, longitude: -54.6422784 }}>
                <Image style={styles.avatar} source={{ uri: "https://avatars3.githubusercontent.com/u/59020856?v=4" }} />
                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_username: 'DiegoMontalvao' })
                }}>
                    <View style={styles.callout}>
                        <Text style={styles.devName}>Diego Montalvão</Text>
                        <Text style={styles.devBio}>Rockie in this beautiful world of web development</Text>
                        <Text style={styles.devTechs}>ReactJS, React Native, NodeJS</Text>
                    </View>
                </Callout>
            </Marker>
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 50/2,
        borderWidth: 4,
        borderColor: '#fff',
    },
    callout: {
        width: 260,
    },
    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    devBio: {
        color: '#666',
        marginTop: 5,
    },
    Techs: {
        marginTop: 5,
    },

})

export default Main;
