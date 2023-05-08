import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../style/OrderDetails";
import FontAweSome5 from "react-native-vector-icons/FontAwesome5";

const OrderDetails = ({ route }) => {
  const orderInfo = route.params.details;

  console.log(orderInfo);

  return (
    <View style={styles.container}>
      {/* Restaurant Details */}
      <View style={styles.card}>
        <Text style={styles.cardHeader}>Restaurant Details</Text>
        <View style={styles.cardBody}>
          <Image
            source={orderInfo.image}
            style={styles.orderLogo}
            resizeMode="cover"
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{orderInfo.title}</Text>
            <Text style={styles.cardSubTitle}>{orderInfo.subTitle}</Text>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.cardBtn}>
            <FontAweSome5 name="phone-alt" color="#059669" size={18} />
            <Text style={[styles.btnText, { color: "#059669" }]}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardBtn}>
            <FontAweSome5 name="location-arrow" color="#888" size={18} />
            <Text style={[styles.btnText, { color: "#888" }]}>Direction</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Customer Content Details */}
      <View style={[styles.card, { marginTop: 20 }]}>
        <Text style={styles.cardHeader}>Customer Content Details</Text>
        <View style={styles.cardBody}>
          <Image
            source={require("../../images/user.png")}
            style={styles.orderLogo}
            resizeMode="cover"
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Zen</Text>
            <Text style={styles.cardSubTitle}>Bahan, Yangon, Myanmar</Text>
          </View>
        </View>

        <View style={styles.cardFooter}>
          <TouchableOpacity style={styles.cardBtn}>
            <FontAweSome5 name="phone-alt" color="#059669" size={18} />
            <Text style={[styles.btnText, { color: "#059669" }]}>Call</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardBtn}>
            <FontAweSome5 name="location-arrow" color="#888" size={18} />
            <Text style={[styles.btnText, { color: "#888" }]}>Direction</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Items */}
      <View style={styles.item}>
        <View style={styles.itemHeader}>
          <Text style={styles.itemUnit}>
            Item: <Text style={{ color: "#059669" }}>{orderInfo.items}</Text>
          </Text>

          <View style={styles.paymentBtn}>
            <Text style={styles.paymentBtnText}>{orderInfo.payment}</Text>
          </View>
        </View>

        <View style={styles.divider}></View>
      </View>
    </View>
  );
};

export default OrderDetails;
