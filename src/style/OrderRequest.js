import { StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },

  card: {
    width: width - 40,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 10,

    padding: 20,
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: "auto",
  },

  cardHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  cardInfo: {
    display: "flex",
    flexDirection: "row",
  },

  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,

    marginRight: 5,
  },

  cardTitle: {
    fontFamily: "poppins-bold",
  },

  cardSubTitle: {
    fontFamily: "poppins-regular",
    fontSize: 12,
    color: "#999",
  },

  payment: {
    backgroundColor: "#059669",
    borderRadius: 5,

    padding: 5,
  },

  items: {
    textAlign: "center",
    fontFamily: "poppins-bold",
  },

  min: {
    textAlign: "center",
    fontFamily: "poppins-bold",
    fontSize: 16,
    color: "#059669",
  },

  cardFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 10,
  },

  button: {
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
});
