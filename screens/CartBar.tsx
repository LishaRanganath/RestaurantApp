import { View, Text, StyleSheet, Pressable } from "react-native";
import {useSelector} from 'react-redux';
import { RootState } from "@/components/redux/rootReducer";
import { useEffect, useState } from "react";
import { NavigationProps } from "@/types/types";

export default function CartBar(props: NavigationProps){

    const cartData = useSelector((state: RootState)=>state.reducer)
    const [cartItems, setCartItems] = useState(0)
    // console.warn(cartData)
    useEffect(()=>{
        setCartItems(cartData.length)
    },[cartData])
    return(
       <Pressable onPress={()=> props.navigation.navigate('Cart')}>
         <View style={styles.container}>
            <Text style={styles.cart_text}>Cart</Text>
        
        {cartItems > 0 && (
           
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartItems}</Text>
                </View>
          )}
          </View>
       </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        marginRight: 20,
        marginTop: 10,
        backgroundColor: "#ff4d4d",
        width: "20%",
        alignSelf: "flex-end",
        borderRadius: 10,
        justifyContent: "center",
        alignItems:"center",
        height: 30
    },
    cart_text:{
        fontSize: 17,
    },
    badge: {
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 6,
        paddingVertical: 2,
        position: 'absolute',
        top: -5, 
        right: -5, 
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      badgeText: {
        fontSize: 12,
        color: '#ff4d4d',
        fontWeight: 'bold',
      },
    });
