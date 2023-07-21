import React from 'react';
import { Image } from 'react-native';
import { ImageBackground, StyleSheet, View, Text, Button} from 'react-native';

function LandingPage() {
    return (
      <ImageBackground style={styles.background}>
        <View style={styles.ViewContainer}>
          <Text style={styles.textColors}>WhatsApp Locked</Text>
          <Text style={styles.unlock}>
            Unlock with Touch ID to open WhatsApp
          </Text>
        </View>
        <Button title={"Use Touch ID"} style={styles.btn}>
        </Button>
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
    fontSize: 17,
  },
  ViewContainer: {
    position: "absolute",
    top: 350,
  }
});

export default LandingPage;