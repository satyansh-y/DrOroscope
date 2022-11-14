import React, { Component, useEffect, useState } from "react";

import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PatientCard from "../components/patientCard";
import { Button, FAB } from "react-native-paper";





function PatientScreen(props) {
  const [patientList, updatePatients] = useState([]);
  
  return (
    <SafeAreaView style={styles.layer}>
      
      <View style={styles.header}>
        <Icon name="people" style={styles.peopleIcon} />
        <Text style={styles.title}>Patients</Text>
      </View>
      {/* <SearchBar style={{ margin: 10, backgroundColor: "#cad6ec" }} /> */}

      <FlatList
        scrollEnabled={true}
        data={patientList}
        renderItem={({ item, index }) => (
          <PatientCard
            patientName={item.Name}
            patientID={"ID: " + item.id.substring(1, 4)}
            onPress={PatientInfo}
          />
        )}
      />

      <FAB icon="plus" style={styles.button} onPress={addPatient} />
    </SafeAreaView>
  );
}

export default PatientScreen;
const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#FFFFF7",
  },

  layer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    fontSize: 20,
  },
  peopleIcon: {
    fontSize: 40,
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 50,
    right: 20,
  },
});
