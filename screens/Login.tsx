import { TextInput, View, Pressable, StyleSheet, Text } from "react-native";
import { NavigationProps } from "@/types/types";

export default function Login(props: NavigationProps) {
  return (
    <View style={styles.main_conatiner}>
      <Text style={styles.main_text}>Login</Text>
      <View style={styles.conatiner}>
        <View style={styles.field_container}>
          <Text style={styles.text}>Email - ID:</Text>
          <TextInput
            style={styles.form_field}
            placeholder="Enter your Email-id"
            placeholderTextColor="#b3b3b3"
          />
        </View>
        <View style={styles.field_container}>
          <Text style={styles.text}>Password:</Text>
          <TextInput
            style={styles.form_field}
            placeholder="Enter your Password"
            placeholderTextColor="#b3b3b3"
          />
        </View>
        <Pressable style={styles.login_button_style}>
          <Text style={styles.text}>Login</Text>
        </Pressable>
        <Text style={{ fontSize: 20 }}>No Account?</Text>
        <Pressable
          style={styles.signup_button_style}
          onPress={() => {
            props.navigation.navigate("SignUp"); // Accessing navigation via props
          }}
        >
          <Text style={styles.text}>SignUp</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_conatiner: {
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
  conatiner: {
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
    // marginLeft: 30,
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
    // marginTop: 20,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
});
