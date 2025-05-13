import { useNavigation } from "expo-router";
import { Formik } from "formik";
import { useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";

export default function FormikForm() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: "   React Native Form Using  Formik" });
  }, [navigation]);

  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      style={{ flex: 1 }}
      blurRadius={3}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Form</Text>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            Alert.alert(`${values.name}, your form is submitted`);
            resetForm();
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <>
              <TextInput
                placeholder="Enter Name"
                style={styles.input}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              <TextInput
                placeholder="Enter e-mail"
                style={styles.input}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              <TextInput
                placeholder="Enter password"
                style={styles.input}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.btn}
                onPress={() => handleSubmit()}
              >
                <Text>Submit</Text>
              </TouchableOpacity>
              <Text style={styles.display}>{values.name}</Text>
              <Text style={styles.display}>{values.email}</Text>
              <Text style={styles.display}>{values.password}</Text>
            </>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: "800",
    color: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 60,
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 15,
    fontSize: 12,
    borderStyle: "dotted",
    borderColor: "#1f06c5",
  },
  btn: {
    paddingHorizontal: 16,
    paddingVertical: 7,
    marginTop: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: "#e08b0b",
    borderColor: "#e08b0b",
  },
  display: {
    width: "60%",
    marginTop: 35,
    textAlign: "center",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
  },
});
