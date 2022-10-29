import React, {useEffect, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    StatusBar,
    Platform,
    FlatList,
  } from "react-native";
  import PatientCard from "../components/patientScreenComponents/patientCard";

function PatientScreen(props) {
    return ( 
      <PatientCard/>

     );
}

export default PatientScreen;