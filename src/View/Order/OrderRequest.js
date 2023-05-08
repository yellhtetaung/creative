import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../style/OrderRequest";

const orderLists = [
  {
    title: "Mc donaid's",
    subTitle: "American culsme, fast food",
    image: require("../../images/image.png"),
    items: 2,
    min: 2,
    payment: "COD",
  },
  {
    title: "Mc donaid's",
    subTitle: "American culsme, fast food",
    image: require("../../images/image.png"),
    items: 2,
    min: 2,
    payment: "Digitally Paid",
  },
  {
    title: "Mc donaid's",
    subTitle: "American culsme, fast food",
    image: require("../../images/image.png"),
    items: 2,
    min: 2,
    payment: "COD",
  },
  {
    title: "Mc donaid's",
    subTitle: "American culsme, fast food",
    image: require("../../images/image.png"),
    items: 2,
    min: 2,
    payment: "Digitally Paid",
  },
];

const OrderRequest = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>Creative</Text>
      {orderLists.map((list, index) => {
        return (
          <TouchableOpacity
            style={styles.card}
            key={index}
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("orderDetails", { details: list })
            }
          >
            <View style={styles.cardHeader}>
              <View style={styles.cardInfo}>
                <Image source={list.image} style={styles.itemLogo} />
                <View>
                  <Text style={styles.cardTitle}>{list.title}</Text>
                  <Text style={styles.cardSubTitle}>{list.subTitle}</Text>
                </View>
              </View>
              <View>
                <TouchableOpacity style={styles.payment}>
                  <Text
                    style={{
                      fontFamily: "poppins-regular",
                      color: "#fff",
                      fontSize: 10,
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

export default OrderRequest;
