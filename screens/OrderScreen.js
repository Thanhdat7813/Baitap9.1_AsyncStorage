import React, {useState} from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
ScrollView,
Dimensions
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;

export default function OrderScreen(){

const [quantity,setQuantity] = useState(2);

const price = 28;

const subtotal = price * quantity;
const delivery = 6.2;
const total = subtotal + delivery;

const increase = ()=> setQuantity(quantity+1);
const decrease = ()=> quantity>1 && setQuantity(quantity-1);

return(

<View style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<Ionicons name="arrow-back" size={26}/>

<Text style={styles.headerTitle}>
Shopping Cart
</Text>

<Ionicons name="trash-outline" size={26}/>

</View>


<ScrollView showsVerticalScrollIndicator={false}>

{/* IMAGE */}

<View style={styles.imageWrapper}>

<Image
source={require("../assets/burgerbig.png")}
style={styles.mainImage}
/>

<View style={styles.discount}>
<Text style={styles.discountText}>10% OFF</Text>
</View>

</View>


{/* THUMBNAILS */}
<View style={styles.thumbRow}>

<View style={styles.thumbCard}>
<Image source={require("../assets/burger11.png")} style={styles.thumbImage}/>
</View>

<View style={styles.thumbCard}>
<Image source={require("../assets/burger12.png")} style={styles.thumbImage}/>
</View>

<View style={styles.thumbCard}>
<Image source={require("../assets/burger13.png")} style={styles.thumbImage}/>
</View>

</View>

{/* CARD */}

<View style={styles.card}>

<View style={styles.titleRow}>

<Text style={styles.title}>
BURGER
</Text>

<Text style={styles.price}>
$28
</Text>

</View>


<View style={styles.ratingRow}>

<Text style={styles.star}>⭐</Text>

<Text style={styles.rating}>
4.9 (3k+ Rating)
</Text>

<View style={styles.quantityBox}>

<TouchableOpacity onPress={decrease}>
<Ionicons name="remove-circle-outline" size={28}/>
</TouchableOpacity>

<Text style={styles.qtyText}>
{quantity.toString().padStart(2,"0")}
</Text>

<TouchableOpacity onPress={increase}>
<Ionicons name="add-circle-outline" size={28}/>
</TouchableOpacity>

</View>

</View>


{/* ADDRESS */}

<View style={styles.addressRow}>

<View style={styles.addressBox}>

<Ionicons name="location-outline" size={24}/>

<View>

<Text style={styles.addressTitle}>
Delivery Address
</Text>

<Text style={styles.address}>
Dhaka, Bangladesh
</Text>

</View>

</View>

<View style={styles.pinBtn}>
<Ionicons name="link-outline" size={22} color="white"/>
</View>

</View>


{/* PAYMENT */}

<View style={styles.paymentRow}>

<View style={styles.paymentLeft}>

<Image 
source={require("../assets/card.png")} 
style={styles.paymentIcon}
/>

<Text style={styles.paymentText}>
Payment Method
</Text>

</View>

<TouchableOpacity style={styles.changeBtn}>
<Text style={styles.changeText}>Change</Text>
</TouchableOpacity>

</View>


{/* SUMMARY */}

<View style={styles.summary}>

<Text style={styles.summaryTitle}>
Checkout Summary
</Text>

<View style={styles.summaryRow}>
<Text style={styles.summaryText}>Subtotal ({quantity})</Text>
<Text style={styles.summaryText}>${subtotal}</Text>
</View>

<View style={styles.summaryRow}>
<Text style={styles.summaryText}>Delivery Fee</Text>
<Text style={styles.summaryText}>${delivery}</Text>
</View>

<View style={styles.summaryRow}>
<Text style={styles.totalText}>Payable Total</Text>
<Text style={styles.totalPrice}>${total}</Text>
</View>

</View>


{/* BUTTON */}

<TouchableOpacity style={styles.confirmBtn}>

<Text style={styles.confirmText}>
Confirm Order
</Text>

</TouchableOpacity>

</View>

</ScrollView>

</View>

)

}


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"transparent"
},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
paddingHorizontal:20,
paddingTop:50,
paddingBottom:15
},

headerTitle:{
fontSize:22,
fontWeight:"bold"
},

imageWrapper:{
alignItems:"center"
},

mainImage:{
width:width-30,
height:250,
borderRadius:20
},

discount:{
position:"absolute",
left:35,
top:25,
backgroundColor:"#e74c3c",
padding:12,
borderRadius:50
},

discountText:{
color:"white",
fontWeight:"bold",
fontSize:14
},

/* THUMB */

thumbRow:{
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
marginTop:-45
},

thumbCard:{
width:110,
height:110,
backgroundColor:"white",
borderRadius:20,
justifyContent:"center",
alignItems:"center",
marginHorizontal:6,

shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:8,
elevation:4
},

thumbImage:{
width:85,
height:85,
resizeMode:"contain"
},

/* CARD */

card:{
backgroundColor:"white",
marginTop:25,
borderTopLeftRadius:35,
borderTopRightRadius:35,
padding:25
},

titleRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

title:{
fontSize:32,
fontWeight:"bold"
},

price:{
fontSize:26,
color:"#5f3dc4",
fontWeight:"bold"
},

ratingRow:{
flexDirection:"row",
alignItems:"center",
marginTop:12
},

star:{
fontSize:18,
marginRight:5
},

rating:{
fontSize:16,
color:"#555"
},

quantityBox:{
flexDirection:"row",
alignItems:"center",
marginLeft:"auto"
},

qtyText:{
marginHorizontal:12,
fontWeight:"bold",
fontSize:18
},

/* ADDRESS */

addressRow:{
flexDirection:"row",
marginTop:25
},

addressBox:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#BFE3D7",
flex:1,
padding:18,
borderRadius:14,
gap:10
},

addressTitle:{
fontSize:14,
color:"#555"
},

address:{
fontWeight:"bold",
fontSize:16
},

pinBtn:{
width:70,
marginLeft:10,
backgroundColor:"#8B86F7",
justifyContent:"center",
alignItems:"center",
borderRadius:14
},

/* PAYMENT */

paymentRow:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginTop:28
},

paymentLeft:{
flexDirection:"row",
alignItems:"center",
gap:10
},

paymentText:{
fontSize:18
},

paymentIcon:{
width:35,
height:22,
resizeMode:"contain"
},

changeBtn:{
borderWidth:1.5,
borderColor:"#5f3dc4",
paddingHorizontal:18,
paddingVertical:8,
borderRadius:25
},

changeText:{
color:"#5f3dc4",
fontSize:14
},

/* SUMMARY */

summary:{
marginTop:25
},

summaryTitle:{
fontSize:20,
fontWeight:"bold",
marginBottom:12
},

summaryRow:{
flexDirection:"row",
justifyContent:"space-between",
marginVertical:6
},

summaryText:{
fontSize:16
},

totalText:{
fontWeight:"bold",
fontSize:18
},

totalPrice:{
color:"#5f3dc4",
fontWeight:"bold",
fontSize:18
},

/* BUTTON */

confirmBtn:{
backgroundColor:"#4C3CFF",
padding:20,
borderRadius:35,
marginTop:30,
marginBottom:40,
alignItems:"center"
},

confirmText:{
color:"white",
fontSize:18,
fontWeight:"bold"
}

});