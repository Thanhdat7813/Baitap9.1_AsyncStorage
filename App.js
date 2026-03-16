import React from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import TabNavigator from "./navigation/TabNavigator";

/* làm nền navigation trong suốt */
const MyTheme = {
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    background:"transparent"
  }
};

export default function App() {

return(

<View style={styles.container}>

<View style={styles.topBackground} />

<NavigationContainer theme={MyTheme}>

<TabNavigator/>

</NavigationContainer>

</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#ffffff"
},

topBackground:{
position:"absolute",
top:0,
left:0,
right:0,
height:200,
backgroundColor:"#F6F3C6",
borderBottomLeftRadius:50,
borderBottomRightRadius:50
}

});