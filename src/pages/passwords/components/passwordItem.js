import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const PasswordItem = ({ data, removePassword }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <Pressable
      onLongPress={removePassword}
      style={styles.container}
      onPress={togglePasswordVisibility}
    >
      <Text style={styles.text}>{isPasswordVisible ? data : "*********"}</Text>
      <View>
        <Text>
          {isPasswordVisible ? (
            <Ionicons size={24} color={"white"} name="eye-off-outline" />
          ) : (
            <Ionicons size={24} color={"white"} name="eye-outline" />
          )}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "#FFF",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#0e0e0e",
//     padding: 14,
//     width: "100%",
//     marginBottom: 14,
//     borderRadius: 8,
//     flexDirection: "row"
//   },
//   text: {
//     color: "#FFF",
//   }
// });

export default PasswordItem;
