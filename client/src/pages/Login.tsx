// @ts-ignore
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import LoginBg from "../../assets/LoginBg.png";
// import { button3 } from "../common/Button";
import BgLogin from "../assets/images/bg-login.jpg";

type LoginProps = {
  navigation: any;
};

type LoginData = {
  email: string;
  password: string;
};

const Login = ({ navigation }: LoginProps) => {
  const [data, setData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<string | null>(null);

  const sendToBackend = () => {
    if (data.email === "" || data.password === "") {
      setErrors("Please fill all the fields");
      return;
    } else {
      try {
        fetch("http://192.168.9.22:8081/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          // @ts-ignore
        }).then((res) =>
          // @ts-ignore
          res.json().then((data) => {
            if (data.error) {
              setErrors(data.message);
            } else {
              // @ts-ignore
              alert("Login Successful");
              navigation.navigate("Home");
            }
          })
        );
      } catch (error) {
        // @ts-ignore
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={BgLogin} style={styles.patternbg} />
      <ScrollView style={styles.container1}>
        <View style={styles.LoginWrapper}>
          <View style={styles.containerLogin}>
            <Text style={styles.loginText}>Welcome Back</Text>
            <Text style={styles.SigninText}>Sign in to continue</Text>

            {errors ? <Text style={styles.error}>{errors}</Text> : null}

            <View>
              <Text style={styles.email}>Email</Text>
              <TextInput
                onPressIn={() => setErrors(null)}
                onChangeText={(text: any) => setData({ ...data, email: text })}
                style={styles.input1}
                placeholder="Enter your email"
              />
              <Text style={styles.password}>Password</Text>
              <TextInput
                onPressIn={() => setErrors(null)}
                onChangeText={(text: any) =>
                  setData({ ...data, password: text })
                }
                style={styles.input2}
                placeholder="Enter your password"
              />
            </View>
            <TouchableOpacity onPressIn={sendToBackend}>
              <Text style={styles.Login}>Login</Text>
            </TouchableOpacity>

            <Text
              style={styles.Create}
              onPress={() => navigation.navigate("Signup")}
            >
              Don't have an account?
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.input1}>go back to welcome page</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {
    flex: 1,
  },
  patternbg: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    // backgroundColor: "#800989",
  },
  LoginWrapper: {
    display: "flex",
    marginTop: "70%",
    width: 415,
    borderRadius: 20,
    // height: "100%",
    backgroundColor: "#dfc1f1",
    shadowColor: "#37114d",
    shadowOffset: {
      width: -40,
      height: 2,
    },
    shadowOpacity: 3.25,
    shadowRadius: 4.84,
    elevation: 6,
  },
  error: {
    backgroundColor: "red",
    color: "white",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    fontSize: 15,
  },
  input1: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 13,
    borderColor: "#4b66e4",
  },
  input2: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 13,
    borderColor: "#4b66e4",
  },
  containerLogin: {
    display: "flex",
    marginTop: "70%",
    width: 415,
    borderRadius: 20,
    height: "100%",
    backgroundColor: "white",
    shadowColor: "#00000",
    shadowOffset: {
      width: -40,
      height: 2,
    },
    shadowOpacity: 3.25,
    shadowRadius: 4.84,
    elevation: 6,
  },
  Login: {
    fontFamily: "source-sans-pro",
  },
  loginText: {
    // display: "flex",
    marginTop: "20%",
    fontSize: 50,
    fontFamily: "source-sans-pro",
    color: "#000000",
    fontWeight: "bold",
    textAlign: "center",
  },
  SigninText: {
    display: "flex",
    marginTop: 2,
    marginLeft: "30%",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    // fontWeight: "semibold",
  },
  email: {
    display: "flex",
    // marginTop: "20%",
    marginLeft: "10%",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    // fontWeight: "semibold",
  },
  password: {
    display: "flex",
    // marginTop: "20%",
    marginLeft: "10%",
    fontSize: 15,
    justifyContent: "center",
    alignItems: "center",
    // fontWeight: "semibold",
  },
  loginBtn: {
    display: "flex",
    marginTop: "10%",
    marginLeft: "30%",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "semibold",
    color: "white",
    backgroundColor: "#4b66e4",
  },
  Create: {
    display: "flex",
    marginTop: "10%",
    marginBottom: "40%",
    marginLeft: "25%",
    fontSize: 20,
    // fontWeight: "semibold",
    color: "#4b66e4",
  },
});

function fetch(
  arg0: string,
  arg1: {
    method: string;
    headers: { Accept: string; "Content-Type": string };
    body: string;
  }
) {
  throw new Error("Function not implemented.");
}
