import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("screen");

const checkBox = (checked) => {
  if (checked) {
    return <MaterialCommunityIcons name={"checkbox-outline"} size={25} />;
  } else {
    return <MaterialCommunityIcons name={"checkbox-blank-outline"} size={25} />;
  }
};

const LoginPage = () => {
  const [isRemember, setIsRemember] = useState(false);
  const [isShowPass, setIsShowPass] = useState(true);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/*Header*/}
        <View>
          <Text style={styles.header}>Creative</Text>
          <Text style={styles.subTitle}>Sign In</Text>
        </View>

        {/*Form*/}
        <View style={styles.formGroup}>
          <View style={styles.formStyle}>
            <Feather name="mail" size={20} color="#888" />
            <TextInput
              style={styles.inputBox}
              keyboardType={"email-address"}
              placeholder="Email"
            />
          </View>
          <View style={styles.divider}></View>
          <View style={styles.formStyle}>
            <View
              style={{
                ...styles.formStyle,
                width: "90%",
                height: "100%",
                paddingHorizontal: 0,
              }}
            >
              <Fontisto name="locked" size={20} color="#888" />
              <TextInput
                style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={isShowPass}
              />
            </View>

            <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
              <Feather
                name={isShowPass ? "eye" : "eye-off"}
                size={20}
                color="#888"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formOptions}>
          <TouchableOpacity
            style={styles.checkOptions}
            onPress={() => setIsRemember(!isRemember)}
          >
            {checkBox(isRemember)}
            <Text
              style={{
                marginLeft: 5,
                fontFamily: "oswald-regular",
                fontSize: 17,
              }}
            >
              Remember me
            </Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5}>
            <Text
              style={{
                color: "#22c55e",
                fontFamily: "oswald-regular",
                fontSize: 17,
              }}
            >
              Forget password?
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.signButton}
          onPress={() => navigation.navigate("orderRequest")}
        >
          <Text style={styles.signText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  header: {
    fontFamily: "poppins-regular",
    fontSize: 45,
    color: "#22c55e",
    textAlign: "center",
  },

  subTitle: {
    fontFamily: "oswald-bold",
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },

  formGroup: {
    width: "100%",
    height: height / 8,
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    elevation: 3,

    marginTop: height / 20,
  },

  formStyle: {
    width: "100%",
    height: height / 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 20,
  },

  divider: {
    width: "90%",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",

    marginLeft: "auto",
    marginRight: "auto",
  },

  inputBox: {
    width: "100%",
    height: "50%",
    fontSize: 16,

    paddingLeft: 20,
  },

  formOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 20,
  },

  checkOptions: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  signButton: {
    width: "100%",
    backgroundColor: "#16a34a",
    borderRadius: 5,
    elevation: 2,

    paddingVertical: 15,
    marginTop: height / 10,
  },

  signText: {
    fontFamily: "poppins-bold",
    color: "#FFF",
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default LoginPage;
