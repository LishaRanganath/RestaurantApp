import { Text,ScrollView,StyleSheet } from "react-native"
import MenuItem from "./MenuItem";
import CartBar from "./CartBar";
import React from "react";
import { NavigationProps } from "@/types/types";

export default function Menu({ navigation }: NavigationProps){
    const menuData = [
        {
        name: "Pasta",
        price: "₹230",
        image: require('../assets/images/pasta1.jpeg')
        },
        {
            name: "Pizza",
            price: "₹250",
            image: require('../assets/images/piz.jpeg')
        },
        {
            name: "Pasta-Pesto",
            price: "₹250",
            image: require('../assets/images/pasta2.jpeg')
        },
        {
            name: "Dosa",
            price: "₹250",
            image: require('../assets/images/dosa.jpeg')
        },
        {
            name: "Pullav",
            price: "₹250",
            image: require('../assets/images/pul.jpeg')
        }
    ]

    const mappedItems = menuData.map(item => (
        <MenuItem key={item.name} item={item} />
    ));

    return(
        <>
            <CartBar navigation={navigation} />
            <ScrollView contentContainerStyle={styles.view_container}>
                {mappedItems}
            </ScrollView>
    </>
    )
}

const styles = StyleSheet.create({
    view_container:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: 10,
    }
})