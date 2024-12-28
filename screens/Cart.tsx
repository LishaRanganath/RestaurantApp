import { Button, ScrollView, Text } from "react-native";
import { useSelector , useDispatch} from "react-redux";
import { clearCart } from "@/components/redux/action";
import { RootState } from "@/components/redux/rootReducer";
import { View , Pressable , Image , StyleSheet } from "react-native";

export default function Cart(){
    const dispatch = useDispatch()
    const cartData = useSelector((state: RootState)=>state.reducer)
    console.log(cartData)

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }

   const mappedData = cartData.map((item,index) =>(
        <View key={index} style={styles.item_container}>
            <Image source={item.image} style={styles.image}></Image>
            <View style={styles.information}>
                <View>
                    <Text style={styles.text_data}>{item.name}</Text>
                    <Text style={styles.text_data}>{item.price}</Text>
                </View>
                {/* <View style={styles.action_buttons}>
                    <Pressable style = {styles.buttons}><Text style={styles.button_text}>+</Text></Pressable>
                    <Pressable  style = {styles.buttons}><Text style={styles.button_text}>-</Text></Pressable>
                </View> */}
                <View>
                    <Pressable style = {styles.remove_cart_button}><Text>Remove Form Cart</Text></Pressable>
                </View>
            </View>
        </View>
   ))
   return (
     <ScrollView style={styles.container}>
       <Text style={styles.title}>Your Cart</Text>

       {mappedData.length > 0 ? (
         <View>
           <View style={styles.clear_cart_conatiner}>
             <Pressable
               style={styles.clear_cart_button}
               onPress={handleClearCart}
             >
               <Text>Clear-Cart</Text>
             </Pressable>
           </View>

           {mappedData}
         </View>
       ) : (
            <View style = {styles.no_text_container}>
            <Text style ={styles.text_data}>No items in the cart</Text>
            </View>
       )}
     </ScrollView>
   );
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        marginBottom: 10,

    },
    image:{
        width: "100%",
        height: 130,
        marginBottom: 16,
        alignSelf: "center"
    },
    text_data:{
        fontSize:20,
        paddingLeft: 10,
        paddingBottom: 3
    },
    title:{
        fontSize: 35,
        margin: 16,
        textAlign: "center"
    },
    item_container:{
        borderColor: "black",
        borderWidth:1,
        margin: 5,
        // flexDirection: "row",
        // alignItems: "center"
    },
    action_buttons:{
        flexDirection: "row",
        paddingRight: 10
    },
    button_text:{
        fontSize:20,
        alignItems: "center",
        justifyContent: "center"
    },
    buttons:{
        borderColor: "black",
        borderWidth: 1,
        padding:5,
        justifyContent: "space-between",
        margin:5,
        borderRadius: 6,
        backgroundColor: "#ff5c33"
    },
    information:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    remove_cart_button:{
        borderColor: "black",
        borderWidth: 0.2,
        backgroundColor: "#ff5c33",
        height: 30,
        justifyContent: "center",
        width: 150,
        alignItems: "center",
        marginRight: 15,
        borderRadius: 10,
        marginBottom:10
        
    },
    clear_cart_button:{
        borderColor: "black",
        borderWidth: 0.2,
        backgroundColor: "#ff5c33",
        width: "25%",
        justifyContent: "center",
        height: 25,
        alignItems: "center",
        borderRadius: 10
    },
    clear_cart_conatiner:{
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 8
    },
    no_text_container:{
        flex:1,
        height:100,
        marginTop:200,
        justifyContent: "center",
        alignItems: "center"
    }
})
