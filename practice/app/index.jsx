// import SectionLists from "./SectionList";
// import  FormikForm  from "./FormikForm";
// import  Radiobtn  from "./Radiobtn";

// <View style={styles.container}>
//   <ScrollView>
//     <FormikForm />
//     <SectionLists />
//   <Radiobtn />
//   </ScrollView>
// </View>

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#1e293b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "HOME", headerBackVisible: false }}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Welcome Home</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const Login = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Login Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#facc15",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#488b09",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
