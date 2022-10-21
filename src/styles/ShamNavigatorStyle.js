import {StyleSheet,Platform,Dimensions} from 'react-native';
import SmartScale from '../entity/SmartScale';
const {height,width} =  Dimensions.get('window');
const shamNavigatorStyles = StyleSheet.create({
    //导航栏
    navigatorStyles: {
        backgroundColor: '#63B8FF',
        flexDirection: 'row',
        height:SmartScale.ShameNavigator_navigatorStyles_height,
        alignItems:'center',
    },
    RightImage:{
        marginRight:16,
        width: 18,
        height: 18,
    },
    //标题左边的视图
    LeftView:{
        ...Platform.select({
            ios:{
                flex:1,
                justifyContent:'flex-start',
            },
            android:{},
        }),
    },
    //左边的字体
    LeftText:{
        marginLeft: 16,
        fontSize: 18,
        color: 'white',
    },
    //左边视图的图片
    LeftImg:{
        marginLeft: 16,
        width: SmartScale.ShameNavigator_LeftImg_width,
        height: SmartScale.ShameNavigator_LeftImg_height,
    },
    //标题视图
    TitleView: {
        ...Platform.select({
            ios:{
                flex:1,
            },
            android:{flex:1},
        }),
    },
    //标题文字
    TitleText: {
        ...Platform.select({
            ios:{
                textAlign:'center',
                fontWeight:'800'
            },
            android:{
                marginLeft:16,
                fontWeight:'500'
            },
        }),
        color:'white',
        fontSize:SmartScale.ShameNavigator_fontSize,
    },
    picNumText:{
        ...Platform.select({
            ios:{
                textAlignVertical:'center',
                textAlign:'center',
                fontWeight:'800',

            },
            android:{
                flex:1,
                textAlign:'right',
                fontWeight:'500',
                textAlignVertical:'center'
            },
        }),
        color:'white',
        fontSize:SmartScale.ShameNavigator_fontSize,
    },
    sdCardView:{
        flex:1,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    sdCardText:{
        color:'white',
        fontSize:SmartScale.ShameNavigator_fontSize,
        ...Platform.select({
            ios:{
                fontWeight:'800',
            },
            android:{
                fontWeight:'500',
            },
        }),
    },
    //标题右边的视图
    RightView: {
        flex:1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    //右边视图的文字
    RightText:{
        ...Platform.select({
            ios:{
                marginRight:16,
            },
            android:{
                marginRight:16,
            },
        }),
        fontSize: 18,
        color: 'white',
        //marginTop: 5,
    },
    downloadBtn:{
        ...Platform.select({
            ios:{
                //marginRight:16,
                //top:2
            },
            android:{
                marginRight:16,
            },
        }),
        fontSize: 18,
        color: 'white',
    },
    RightMapImage:{
        ...Platform.select({
            ios:{
                marginRight:16,
                //top:2
            },
            android:{
                marginRight:16,
            },
        }),
        color: 'white',
        fontSize:SmartScale.ShameNavigator_fontSize,

    },
    RightDisabledText:{
        //width: 80,
        //alignItems:'flex-start',
        marginRight: 16,
        fontSize:SmartScale.ShameNavigator_fontSize,
        color: '#D3D3D3'
    },
    imageStyle:{
        ...Platform.select({
            ios:{
                width: 20,
                height: 20,
            },
            android:{
                //marginTop: 3,
                width: 20,
                height: 20,
                marginTop:2
            },
        }),
    },

});
export {shamNavigatorStyles};