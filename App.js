import React, { useCallback } from "react";
import { Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

// Font
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

// Screens
import HomePage from "./src/View/Home";
import LoginPage from "./src/View/Auth/Login";
import OrderRequest from "./src/View/Order/OrderRequest";
import OrderDetails from "./src/View/Order/OrderDetails";

const headerLeft = () => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Ionicons name={"chevron-back"} size={30} />
    </Pressable>
  );
};

const App = () => {
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins/Poppins-Black.ttf"),
    "poppins-thin": require("./assets/fonts/Poppins/Poppins-Thin.ttf"),
    "oswald-regular": require("./assets/fonts/Oswald/static/Oswald-Regular.ttf"),
    "oswald-bold": require("./assets/fonts/Oswald/static/Oswald-Bold.ttf"),
    "oswald-semibold": require("./assets/fonts/Oswald/static/Oswald-SemiBold.ttf"),
    "oswald-thin": require("./assets/fonts/Oswald/static/Oswald-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerLeft,
          headerLeftContainerStyle: { marginLeft: 20 },
        }}
      >
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false }}
        />

        {/* Login and Signup*/}
        <Stack.Screen
          name="login"
          component={LoginPage}
          options={{
            headerShown: false,
          }}
        />

        {/*Order Request*/}
        <Stack.Screen
          name="orderRequest"
          component={OrderRequest}
          options={{
            headerTitleAlign: "center",
            headerTitle: "Order Request",
            headerTitleStyle: { fontFamily: "poppins-bold" },
          }}
        />

        {/*Order Details*/}
        <Stack.Screen
          name="orderDetails"
          component={OrderDetails}
          options={{
            headerTitleAlign: "center",
            headerTitle: "Order Details",
            headerTitleStyle: { fontFamily: "poppins-bold" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
