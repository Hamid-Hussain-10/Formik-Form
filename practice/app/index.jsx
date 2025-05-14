import { View, StyleSheet, ScrollView} from "react-native";
import SectionLists from "./SectionList";
import  FormikForm  from "./FormikForm";
import  Radiobtn  from "./Radiobtn";

const Index = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FormikForm />
        <SectionLists />
      <Radiobtn />
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
