
//todo
//make it a functional component, 
//make better design
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  TextInput,
  Dimensions,
} from "react-native";
import RegistrationInputCheck from "../components/registrationInputCheck";

import RegistrationInput from "../components/registrationInputText";


const windowWidth = Dimensions.get("window").width;

class NewPatient extends Component {
  constructor(props) {
    const [patientInformation, updatePatientInformation] = useState({
      name: "",
      address: "",
      phone: "",
      age: "",
      email: "",
      sex: "",
      dob: "",
      prev_diag: false,
      other_diag: "",
      current_smoking_bool: true,
      prev_smoking_bool: false,
      current_tobacco_bool: false,
      prev_tobacco_bool: false,
      tobacco_frequency: "",
      years_tobacco: "",
      smoking_frequency: "",
      years_smoking: "",
      current_drinking_bool: false,
      prev_drinking_bool: false,
      drinking_frequency: "",
      years_drinking: "",

      ulcer_bool: false,
      ulcer_checks: [],
      ulcer_duration: "",
      ulcer_descption: "",
      patch_bool: false,
      patch_checks: [],
      patch_duration: "",
      patch_descption: "",
      additional_notes: "",
    });
    super(props);
    // this.getUser();
    this.state = {
      name: "",
      address: "",
      phone: "",
      age: "",
      email: "",
      sex: "",
      dob: "",
      prev_diag: false,
      other_diag: "",
      current_smoking_bool: true,
      prev_smoking_bool: false,
      current_tobacco_bool: false,
      prev_tobacco_bool: false,
      tobacco_frequency: "",
      years_tobacco: "",
      smoking_frequency: "",
      years_smoking: "",
      current_drinking_bool: false,
      prev_drinking_bool: false,
      drinking_frequency: "",
      years_drinking: "",

      ulcer_bool: false,
      ulcer_checks: [],
      ulcer_duration: "",
      ulcer_descption: "",
      patch_bool: false,
      patch_checks: [],
      patch_duration: "",
      patch_descption: "",
      additional_notes: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (text) => {
    this.setState({
      age: text,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>New Patient</Text>

        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "lightblue",
            borderRadius: 15,
            borderColor: "black",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.headings}>Bio Data</Text>
            <View
              style={{
                flexDirection: "row",
                alignContent: "center",
                marginLeft: 30,
              }}
            >
              <View style={{ flex: 1 }}>
                <RegistrationInput
                  label="Name"
                  multiline={false}
                  value={this.state.name}
                  Change={(text) => {
                    this.setState({ name: text });
                  }}
                />
              </View>
              <View style={{ flex: 1 }}>
                <RegistrationInput
                  label="Age"
                  multiline={false}
                  value={this.state.age}
                  Change={(text) => {
                    this.setState({ age: text });
                  }}
                />
              </View>
            </View>

            <RegistrationInput
              label="Address"
              multiline={false}
              value={this.state.address}
              Change={(text) => {
                this.setState({ address: text });
              }}
            />

            <RegistrationInput
              label="Phone Number"
              multiline={true}
              value={this.state.phone}
              Change={(text) => {
                this.setState({ phone: text });
              }}
            />
            <RegistrationInput
              label="Number"
              multiline={false}
              value={this.state.phone}
              Change={this.handleChange}
            />
            <RegistrationInput
              name="age"
              label="Age"
              multiline={false}
              value={this.state.age}
              Change={this.handleChange}
            />
            <RegistrationInput
              name="dob"
              label="Birth"
              multiline={false}
              value={this.state.dob}
              Change={this.handleChange}
            />
            <RegistrationInput
              name="sex"
              label="Sex"
              multiline={false}
              value={this.state.sex}
              Change={this.handleChange}
            />

            <Text style={styles.headings}>Medical History</Text>

            <View style={styles.previous}>
              <RegistrationInputCheck
                name="prev_diag"
                label="Previously Diagnosed for Oral Cancer?"
                check={this.state.prev_diag ? "checked" : "unchecked"}
                Change={() =>
                  this.setState({
                    prev_diag: !this.state.prev_diag,
                  })
                }
                style={{ alignSelf: "center" }}
              />
              <RegistrationInput
                name="other_diag"
                label="Other: "
                multiline={true}
                value={this.state.other_diag}
                Change={this.handleChange}
              />
            </View>
            <Text style={styles.headings}>Tobacco Habits?</Text>
            <View style={styles.smoking}>
              <RegistrationInputCheck
                name="current_smoking_bool"
                label="Currently Smoke?"
                check={
                  this.state.current_smoking_bool ? "checked" : "unchecked"
                }
                Change={() =>
                  this.setState({
                    current_smoking_bool: !this.state.current_smoking_bool,
                  })
                }
              />
              <RegistrationInputCheck
                name="prev_smoking_bool"
                label="Previously Smoked?"
                value={this.state.prev_smoking_bool}
                check={this.state.prev_smoking_bool ? "checked" : "unchecked"}
                Change={() =>
                  this.setState({
                    prev_smoking_bool: !this.state.prev_smoking_bool,
                  })
                }
              />
            </View>
            {this.state.current_smoking_bool && (
              <View>
                <RegistrationInput
                  name="smoking_frequency"
                  label="Frequency "
                  multiline={true}
                  value={this.state.smoking_frequency}
                  Change={this.handleChange}
                />

                <RegistrationInput
                  name="years_smoking"
                  label="      Years? : "
                  multiline={true}
                  value={this.state.years_smoking}
                  Change={this.handleChange}
                />
              </View>
            )}
            {this.state.prev_smoking_bool && (
              <View>
                <RegistrationInput
                  name="years_smoking"
                  label="      Years? : "
                  multiline={true}
                  value={this.state.years_smoking}
                  Change={this.handleChange}
                />
              </View>
            )}
            <View style={styles.smoking}>
              <RegistrationInputCheck
                name="current_tobacco_bool"
                label="Current Tobacco Use?"
                check={
                  this.state.current_tobacco_bool ? "checked" : "unchecked"
                }
                Change={() =>
                  this.setState({
                    current_tobacco_bool: !this.state.current_tobacco_bool,
                  })
                }
              />
              <RegistrationInputCheck
                name="prev_tobacco_bool"
                label="Previous Use?"
                value={this.state.prev_tobacco_bool}
                check={this.state.prev_tobacco_bool ? "checked" : "unchecked"}
                Change={() =>
                  this.setState({
                    prev_tobacco_bool: !this.state.prev_tobacco_bool,
                  })
                }
              />
            </View>
            {this.state.current_tobacco_bool && (
              <View>
                <RegistrationInput
                  name="tobacco_frequency"
                  label="Frequency "
                  multiline={true}
                  value={this.state.tobacco_frequency}
                  Change={this.handleChange}
                />

                <RegistrationInput
                  name="years_tobacco"
                  label="      Years? : "
                  multiline={true}
                  value={this.state.years_tobacco}
                  Change={this.handleChange}
                />
              </View>
            )}
            {this.state.prev_tobacco_bool && (
              <View>
                <RegistrationInput
                  name="years_tobacco"
                  label="      Years? : "
                  multiline={true}
                  value={this.state.years_tobacco}
                  Change={this.handleChange}
                />
              </View>
            )}
            <Text style={styles.headings}>Alcohol Habits?</Text>
            <View style={styles.smoking}>
              <RegistrationInputCheck
                name="current_drinking_bool"
                label="Do you Drink?"
                check={
                  this.state.current_drinking_bool ? "checked" : "unchecked"
                }
                Change={() =>
                  this.setState({
                    current_drinking_bool: !this.state.current_drinking_bool,
                  })
                }
              />
              <RegistrationInputCheck
                name="prev_drinking_bool"
                label="Previously Drank?"
                value={this.state.prev_drinking_bool}
                check={this.state.prev_drinking_bool ? "checked" : "unchecked"}
                Change={() =>
                  this.setState({
                    prev_drinking_bool: !this.state.prev_drinking_bool,
                  })
                }
              />
            </View>
            {this.state.current_drinking_bool && (
              <View>
                <RegistrationInput
                  name="drinking_frequency"
                  label="Frequency "
                  multiline={true}
                  value={this.state.drinking_frequency}
                  Change={this.handleChange}
                />

                <RegistrationInput
                  name="years_drinking"
                  label="      Years? : "
                  multiline={true}
                  value={this.state.years_drinking}
                  Change={this.handleChange}
                />
              </View>
            )}
            {this.state.prev_drinking_bool && (
              <View>
                <RegistrationInput
                  name="years_smoking"
                  label="      Years? : "
                  multiline={true}
                  value={this.state.years_drinking}
                  Change={this.handleChange}
                />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default NewPatient;
const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
  },
  headings: {
    fontWeight: "bold",
    fontSize: 30,
    paddingLeft: 5,
    backgroundColor: "transparent",
    marginTop: 8,
  },
  previous: {
    alignItems: "center",
  },
  smoking: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
