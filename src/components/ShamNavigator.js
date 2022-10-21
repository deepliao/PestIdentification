import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import {ShamStatusBarStyle} from '../styles/ShamStatusBarStyle'
import {shamNavigatorStyles} from '../styles/ShamNavigatorStyle';

let navigatorStyles = shamNavigatorStyles.navigatorStyles;
let titleTextStyle = shamNavigatorStyles.TitleText;

const Bar=(props) =>{
    return (
        <View>
            <StatusBar hidden = {false} backgroundColor = {'#98c379'}/>
            <Text>{props.name}</Text>
        </View>
    )
}   
const ActionState=(props)=>{
    return (
        <View style = {[navigatorStyles, {height : 28}]} >
            {/* 标题左边的视图*/}
            <View style = {[shamNavigatorStyles.LeftView]}>
                {/* 左边视图的按钮*/}
                <Text>left</Text>
            </View>
            {/* 标题视图*/}
            <View style = {[shamNavigatorStyles.TitleView]} >
                {/* 标题*/}
                <Text>title</Text>
            </View>
            {/* 标题右边的视图*/}
            <View style = {[shamNavigatorStyles.RightView]} >
                <Text>right</Text>
            </View>
        </View>
    )
}

const ShamNavigator = (props) => {
    return (
        <View>
            <Bar/>
        </View>
    )
}

export default ShamNavigator