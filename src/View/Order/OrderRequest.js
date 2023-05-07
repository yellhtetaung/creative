import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");

const OrderRequest = () => {
  const [orderLists, setOrderLists] = useState([
    {
      title: "Mc donaid's",
      subTitle: "American culsme, fast food",
      items: 2,
      min: 2,
      payment: "COD",
    },
    {
      title: "Mc donaid's",
      subTitle: "American culsme, fast food",
      items: 2,
      min: 2,
      payment: "Digitally Paid",
    },
    {
      title: "Mc donaid's",
      subTitle: "American culsme, fast food",
      items: 2,
      min: 2,
      payment: "COD",
    },
    {
      title: "Mc donaid's",
      subTitle: "American culsme, fast food",
      items: 2,
      min: 2,
      payment: "Digitally Paid",
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {orderLists.map((list, index) => {
        return (
          <TouchableOpacity style={styles.card} key={index} activeOpacity={0.8}>
            <View style={styles.cardHeader}>
              <View>
                <Text style={styles.cardTitle}>{list.title}</Text>
                <Text style={styles.cardSubTitle}>{list.subTitle}</Text>
              </View>
              <View>
                <TouchableOpacity style={styles.payment}>
                  <Text
                    style={{
                      fontFamily: "poppins-regular",
                      color: "#fff",
                      fontSize: 12,
                    }}
                  >
                    {list.payment}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={styles.items}>{list.items} Items</Text>
              <Text style={styles.min}>{list.min} mins Ago</Text>
            </View>

            <View style={styles.cardFooter}>
              <TouchableOpacity style={styles.button}>
                <Text style={{ fontFamily: "poppins-regular" }}>Ignore</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: "#059669", borderColor: "#059669" },
                ]}
              >
                <Text style={{ color: "#FFF", fontFamily: "poppins-regular" }}>
                  Accept
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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

  cardTitle: {
    fontFamily: "poppins-bold",
  },

  cardSubTitle: {
    fontFamily: "poppins-regular",
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

export default OrderRequest;
