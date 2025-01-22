import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable } from "react-native"
// import { Add_To_Cart } from "@/components/redux/constant"
import {useDispatch , useSelector} from 'react-redux'
import { addToCart , removeFromCart } from "@/components/redux/action"
import { RootState } from "@/components/redux/rootReducer"
import { useEffect, useState } from "react"

interface MenuProp{
    name: string,
    price: string,
    image: any
}
export default function MenuItem({item} : {item: MenuProp}){

    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.reducer)
    // const role = useSelector((state: RootState) => state.userReducer.role)
    const [isAdded,setIsAdded] = useState(false)

    const handleAddToCart = (item: MenuProp) =>{
        // console.warn("called",item)
        dispatch(addToCart(item))
    }
    const handleRemoveFromCart = (item:MenuProp) =>{
        // console.log(item)
        dispatch(removeFromCart(item.name))
    }

    useEffect(()=>{
       let result = cartItems.filter((elem: MenuProp ) =>{
            return elem.name === item.name
       })
       if(result.length){
        setIsAdded(true)
       }
       else{
        setIsAdded(false)
       }
    },[cartItems])

    return(
            <View style={styles.container}>
                <Image source={item.image} style={styles.image}></Image>
                <Text style ={styles.text_data}>{item.name}</Text>
                <Text style ={styles.text_data}>{item.price}</Text>
                {
                    isAdded?
                    <Pressable style={styles.button_style} onPress={()=>{handleRemoveFromCart(item)}}><Text style={styles.button_text}>Remove From cart</Text></Pressable>
                    :
                    <Pressable style={styles.button_style} onPress={()=>{handleAddToCart(item)}}><Text style={styles.button_text}>Add To Cart</Text></Pressable>
                }
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
        width: "48%",
    },
    image:{
        width: "100%",
        height: 130,
        marginBottom: 16,
        alignSelf: "center"
    },
    button_style: {
        backgroundColor: "#ff5c33",
        height:30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        margin: 5
    },
    button_text:
    {
        fontSize:17
    },
    text_data:{
        fontSize:17
    }
})