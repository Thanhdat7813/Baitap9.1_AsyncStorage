import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";
import InboxScreen from "../screens/InboxScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator(){

return(

<Tab.Navigator
screenOptions={({route})=>({

headerShown:false,

tabBarIcon:({color,size})=>{

let icon;

if(route.name==="Home") icon="home-outline"
if(route.name==="Order") icon="cart-outline"
if(route.name==="Inbox") icon="chatbubble-outline"
if(route.name==="Profile") icon="person-outline"

return <Ionicons name={icon} size={size} color={color}/>

}

})}
>

<Tab.Screen name="Home" component={HomeScreen}/>
<Tab.Screen name="Order" component={OrderScreen}/>
<Tab.Screen name="Inbox" component={InboxScreen}/>
<Tab.Screen name="Profile" component={ProfileScreen}/>

</Tab.Navigator>

)

}