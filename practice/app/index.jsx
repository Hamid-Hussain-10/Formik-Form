import { View, StyleSheet } from "react-native";
import SectionLists from "./SectionList";

const Index = () => {
  return (
    <View style={styles.container}>
      <SectionLists />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
