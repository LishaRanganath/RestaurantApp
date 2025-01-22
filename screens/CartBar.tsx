import { View, Text, StyleSheet, Pressable } from "react-native";
import {useSelector} from 'react-redux';
import { RootState } from "@/components/redux/rootReducer";
import { useEffect, useState } from "react";
import { NavigationProps } from "@/types/types";

export default function CartBar(props: NavigationProps){

    const cartData = useSelector((state: RootState)=>state.reducer)
    const [cartItems, setCartItems] = useState(0)
    const role = useSelector((state: RootState) => state.userReducer.role)
    // console.warn(cartData)
    useEffect(()=>{
        setCartItems(cartData.length)
    },[cartData])

    useEffect(() => {
            if (role) {
              // Perform an action when the role changes
              console.log(`User role updated: ${role}`);
            }
          }, [role]);

    return (
      <View style={styles.main_container}>
        <View style={styles.role_container}>
          <Text style={styles.cart_text}>{role}</Text>
        </View>
        <Pressable onPress={() => props.navigation.navigate("Cart")}>
          <View style={styles.container}>
            <Text style={styles.cart_text}>Cart</Text>

            {cartItems > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{cartItems}</Text>
              </View>
            )}
          </View>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  main_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f2f2f2", // Light background for better contrast
  },
  container: {
    backgroundColor: "#ff4d4d", // Bright red for emphasis
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "relative", // Ensures badge positioning works correctly
  },
  role_container: {
    backgroundColor: "#ff4d4d", // Same theme as the cart button
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  cart_text: {
    fontSize: 16,
    color: "black", // White text for readability
    fontWeight: "600",
  },
  badge: {
    backgroundColor: "#fff", // White background for contrast
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    position: "absolute",
    top: -5, // Positioned above the cart text
    right: -5, // Positioned to the right of the cart text
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ff4d4d", // Matches the main button color
  },
  badgeText: {
    fontSize: 12,
    color: "#ff4d4d", // Red text to match the theme
    fontWeight: "bold",
  },
});
