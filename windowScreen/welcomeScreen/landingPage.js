import React from 'react';
import { Image } from 'react-native';
import { ImageBackground, StyleSheet, View, Text, Button, Alert } from 'react-native';

function LandingPage() {
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/bgIcons.jpg")}
      >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/favicon.png")} />
        <Text>AbangCoooks</Text>
        </View>
        <Button
        style={styles.log}
          title={"Login Here"}
          onPress={() => {
            Alert.alert("Enter your login details");
          }}
        ></Button>
        <Text>Don't have an account?</Text>
        <Button title={"Sign Up"}></Button>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
},
logoContainer: {
    position: "absolute",
    top: 300,
    alignItems: "center",
  },
  log: {
  }
});




export default LandingPage;