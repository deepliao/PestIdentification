import React from 'react'
import { View, Text,Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeSceen from '../pages/HomeScreen'
import MapScreen from '../pages/MapScreen'
import NewsScreen from '../pages/NewsScreen'
import PhotoScreen from '../pages/PhotoScreen'
import QueryScreen from '../pages/QueryScreen'
import {labelStyles} from '../styles/LabelStyle'

MaterialCommunityIcons.loadFont(); 
const Tab = createBottomTabNavigator();

const Router = () => {
    return (
        <Tab.Navigator
            initialRouteName="HomeSceen"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#4630eb',
                tabBarLabelStyle:{
                    textAlign: 'center',
                    fontSize: 12,
                },
            }}
        >
            <Tab.Screen name="Home" component={HomeSceen}
                options={{ tabBarLabel: '首页',
                tabBarIcon:({ color }) => (
                    <Image
                        source={require('../resources/labelIcon/photo.png')}
                        style={[labelStyles.icon, {tintColor:color}]}
                    />
                ),
                }}
            />
            <Tab.Screen name="MapScreen" component={MapScreen}
                options={{ tabBarLabel: '地图',
                tabBarIcon:({ color }) => (
                    <Image
                        source={require('../resources/labelIcon/download.png')}
                        style={[labelStyles.icon, {tintColor:color}]}
                    />
                ),
                }}
            />

            <Tab.Screen name="PhotoScreen" component={PhotoScreen}
                options={{ tabBarLabel: '识别',
                tabBarIcon:({ color }) => (
                    <Image
                        source={require('../resources/labelIcon/remoteControl.png')}
                        style={[labelStyles.icon, {tintColor:color}]}
                    />
                ),
                }}
            />

            <Tab.Screen name="NewsScreen" component={NewsScreen}
                options={{ tabBarLabel: '农讯',
                tabBarIcon:({ color }) => (
                    <Image
                        source={require('../resources/labelIcon/remoteControl.png')}
                        style={[labelStyles.icon, {tintColor:color}]}
                    />
                ),
                }}
            />
            <Tab.Screen name="QueryScreen" component={QueryScreen}
                options={{ tabBarLabel: '农业圈',
                tabBarIcon:({ color }) => (
                    <Image
                        source={require('../resources/labelIcon/devices.png')}
                        style={[labelStyles.icon, {tintColor:color}]}
                    />
                ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Router