import { TextInput, View, Pressable, StyleSheet, Text, Alert } from "react-native";
import { NavigationProps } from "@/types/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/components/redux/rootReducer";
import axios from "axios";
import { userRole } from "@/components/redux/action";
import { useState } from "react";

export default function Login(props: NavigationProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const role = useSelector((state: RootState) => state.userReducer.role); // Replace with your state structure

  const LoginUrl = "http://192.168.1.14:8085/restaurantapp/login/User";
  const fetchRoleUrl = "http://192.168.1.14:8085/restaurantapp/role/User";

  // Fetch user role from backend
  const fetchUserRole = async (email: string) => {
    try {
      const roleResponse = await axios.get(`${fetchRoleUrl}`, {
        params: {
          email: email,
        },
      });
      return roleResponse.data; // Adjust based on your backend's response structure
    } catch (error) {
      console.error("Error fetching user role:", error);
      throw new Error("Unable to fetch user role");
    }
  };

  // Handle login
  const loginUser = async () => {
    if (!email || !password) {
      Alert.alert("Please Fill both the fields");
      return;
    }

    try {
      const response = await axios.get(`${LoginUrl}`, {
        params: {
          email: email,
          password: password,
        },
      });

      const result = response.data;

      if (result) {
        // Fetch the user's role
        const roleResult = await fetchUserRole(email);

        if (roleResult) {
          dispatch(userRole(roleResult)); // Dispatch the role to Redux
          Alert.alert("Login Successful");
          props.navigation.navigate("Menu");
        } else {
          Alert.alert("Unable to fetch user details");
        }
      } else {
        Alert.alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("An error occurred... Sorry");
    }
  };

  return (
    <View style={styles.main_container}>
      <Text style={styles.main_text}>Login</Text>
      <View style={styles.container}>
        <View style={styles.field_container}>
          <Text style={styles.text}>Email - ID:</Text>
          <TextInput
            style={styles.form_field}
            placeholder="Enter your Email-id"
            placeholderTextColor="#b3b3b3"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.field_container}>
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.form_field}
            placeholder="Enter your Password"
            placeholderTextColor="#b3b3b3"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Pressable style={styles.login_button_style} onPress={loginUser}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Text style={{ fontSize: 20 }}>No Account?</Text>
        <Pressable
          style={styles.signup_button_style}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <Text style={styles.text}>SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
  },
  main_text: {
    fontSize: 35,
    marginTop: 120,
  },
  form_field: {
    borderColor: "black",
    borderWidth: 1,
    width: 240,
    height: 30,
    backgroundColor: "white",
  },
  field_container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
  },
  container: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 6,
    marginRight: 6,
    borderColor: "grey",
    borderWidth: 1,
    alignItems: "center",
    backgroundColor: "#ff9999",
    height: 300,
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
  login_button_style: {
    borderColor: "grey",
    borderWidth: 1,
    width: 300,
    marginTop: 20,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  signup_button_style: {
    borderColor: "grey",
    borderWidth: 1,
    width: 300,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
});
