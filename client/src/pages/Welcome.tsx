import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
// @ts-ignore
import Rent from "@/assets/images/Rent.png";
import { NavigationProp } from "@react-navigation/native";
// @ts-ignore
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  navigation: NavigationProp<Record<string, unknown>>;
}

export default function Welcome({ navigation }: Props): JSX.Element {
  const [showPage, setShowPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <View style={styles.container}>
          <Image style={styles.patternbg} source={Rent} />
          {/* <View style={styles.container1}>
            <Text
              style={styles.button1}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
            <Text
              style={styles.button2}
              onPress={() => navigation.navigate("Signup")}
            >
              Signup
            </Text>
          </View> */}
        </View>
      </motion.div>
    </AnimatePresence>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 200,
    // backgroundColor: "#fff",
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
  },
  button1: {
    backgroundColor: "#fff",
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft: 100,
  },
  button2: {
    backgroundColor: "#fff",
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginLeft: 100,
  },
});
