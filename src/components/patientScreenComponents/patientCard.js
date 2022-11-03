import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import { Card, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const PatientCard = (props) => {
  return (
    <Card style={styles.card} elevation={2} mode="outlined" onPress={props.onPress}>
      <Card.Title
        title={props.patientName}
        subtitle={props.patientID}
        titleStyle={styles.text}
        subtitleStyle={styles.subtext}
        left={(props) => <Icon name="person" style={styles.icon} />}
      />
    </Card>
  );
};

export default PatientCard;
const styles = StyleSheet.create({
  card: {
    
    height: 74,
    backgroundColor: "#cad6ec",
    marginTop: 12
  },
  text: {
    fontSize: 20,
  },
  subtext: {
    fontSize: 15,
    color: "black",
    alignSelf: "flex-end",
  },
  icon: {
    fontSize: 30,
  },
});
