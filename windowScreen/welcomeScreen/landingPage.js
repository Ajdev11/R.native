import React from 'react';
import { ImageBackground, StyleSheet, View, Text, Button} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";


function LandingPage() {
    return (
      <ImageBackground style={styles.background}>
        <View style={styles.ViewContainer}>
          <View style={styles.iconContainer}>
            <Icon name="lock" size={60} color="steelblue" style={styles.lock} />
          </View>
          <Text style={styles.textColors}>WhatsApp Locked</Text>
          <Text style={styles.unlock}>
            Unlock with Touch ID to open WhatsApp
          </Text>
        </View>
        <Button title={"Use Touch ID"} style={styles.btn}></Button>
      </ImageBackground>
    );
}


// styling sections
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "black",
  },
  iconContainer: {
    width: 80,
    height: 80,
    alignSelf: "center",
    backgroundColor: "#1E1E1E",
    borderRadius: 40,
    marginBottom: 50,
  },
  lock: {
    alignSelf: "center",
    marginTop: 10,
  },
  btn: {
    width: "100%",
    borderRadius: 25,
  },
  textColors: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  unlock: {
    color: "white",
    fontSize: 19,
    marginTop: 10,
  },
  ViewContainer: {
    position: "absolute",
    top: 180,
  },
});

export default LandingPage;