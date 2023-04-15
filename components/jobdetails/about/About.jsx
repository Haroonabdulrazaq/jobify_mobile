import { View, Text } from "react-native";

import styles from "./about.style";

const About = ({ info, benefits }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headText}>About the job:</Text>

        <View style={styles.contentBox}>
          <Text style={styles.contextText}>{info}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.headText}>Benefits</Text>
        {benefits.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </>
  );
};

export default About;
