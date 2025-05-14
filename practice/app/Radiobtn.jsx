import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Radiobtn = ({ label, value, selected, onSelect }) => {
  return (
    <TouchableOpacity
      style={styles.radioContainer}
      onPress={() => onSelect(value)}
    >
      <View style={[styles.radioCircle, selected && styles.selectedRadio]}>
        {selected && <View style={styles.radioDot} />}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  return (
    <View>
      <Text style={styles.text}>Radio Button</Text>
      <View style={styles.container}>
        <Radiobtn
          label="Option 1"
          value="option1"
          selected={selectedValue === "option1"}
          onSelect={setSelectedValue}
        />
        <Radiobtn
          label="Option 2"
          value="option2"
          selected={selectedValue === "option2"}
          onSelect={setSelectedValue}
        />
        <Radiobtn
          label="Option 3"
          value="option3"
          selected={selectedValue === "option3"}
          onSelect={setSelectedValue}
        />
        <Text style={styles.selectedText}>Selected: {selectedValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  radioCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#06622f",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedRadio: {
    borderColor: "#7d0808",
  },
  radioDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#000000",
  },
  radioLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    marginTop: 20,
    marginLeft: 16,
    fontSize: 26,
    fontWeight: "bold",
  },
});

export default RadioGroup;
