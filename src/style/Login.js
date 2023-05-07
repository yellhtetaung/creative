import { StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
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
