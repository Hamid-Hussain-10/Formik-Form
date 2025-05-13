import { View, StyleSheet, ScrollView} from "react-native";
import SectionLists from "./SectionList";
import  FormikForm  from "./FormikForm";

const Index = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FormikForm />
        <SectionLists />
      </ScrollView>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
