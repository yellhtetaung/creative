import { StyleSheet, Dimensions } from "react-native";

export const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,

    paddingTop: 20,
  },

  card: {
    width: width - 30,
    height: height / 6,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 5,
    justifyContent: "space-around",

    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },

  cardHeader: {
    fontFamily: "poppins-regular",
    color: "#888",
  },

  cardBody: {
    display: "flex",
    flexDirection: "row",
  },

  orderLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,

    borderWidth: 1,
  },

  cardInfo: {
    display: "flex",
    justifyContent: "center",

    marginStart: 10,
  },

  cardTitle: {
    fontFamily: "poppins-bold",
    fontSize: 15,
  },

  cardSubTitle: {
    fontFamily: "poppins-regular",
    fontSize: 13,
    color: "#888",
  },

  cardFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    marginTop: 10,
  },

  cardBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  btnText: {
    fontFamily: "poppins-regular",
    marginLeft: 10,
  },

  item: {
    padding: 20,
  },

  itemHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  itemUnit: {
    fontFamily: "poppins-bold",
  },

  paymentBtn: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#059669",
    borderRadius: 5,
  },

  paymentBtnText: {
    fontFamily: "poppins-bold",
    fontSize: 12,
    color: "#FFF",
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#888",
    marginVertical: 10,
  },
});
