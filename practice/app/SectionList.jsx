import { StyleSheet, Text, View, SectionList } from "react-native";

const users = [
  { id: 1, name: "Hussain", skills: ["React", "Tailwind CSS", "JavaScript"] },
  { id: 2, name: "Aisha Khan", skills: ["HTML", "CSS", "Bootstrap"] },
  { id: 3, name: "Usman Ali", skills: ["Node.js", "Express", "MongoDB"] },
  { id: 4, name: "Zara Ahmed", skills: ["Python", "Django", "REST API"] },
  { id: 5, name: "Bilal Iqbal", skills: ["Java", "Spring Boot", "MySQL"] },
  { id: 6, name: "Sana Tariq", skills: ["Figma", "Adobe XD", "UI/UX"] },
  { id: 7, name: "Ali Raza", skills: ["React Native", "Expo", "Firebase"] },
  {
    id: 8,
    name: "Maria Qureshi",
    skills: ["TypeScript", "Next.js", "GraphQL"],
  },
  { id: 9, name: "Faizan Sheikh", skills: ["PHP", "Laravel", "PostgreSQL"] },
  { id: 10, name: "Nida Farooq", skills: ["C#", ".NET Core", "Azure"] },
];

const sectionData = users.map((user) => ({
  title: user.name,
  data: user.skills,
}));

const SectionLists = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Skills</Text>
      <SectionList
        style={styles.card}
        sections={sectionData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.skillItem}>• {item}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
};

export default SectionLists;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 16,
    marginTop: 16,
    paddingLeft: 10,
    backgroundColor: "#9eeca0",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  skillItem: {
    fontSize: 16,
    paddingVertical: 2,
    paddingLeft: 16,
  },
});
