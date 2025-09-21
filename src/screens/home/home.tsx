import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      
      <Image
        source={require("../../../assets/images/logo.png")}
        style={styles.logo}
      />

      <Image
       source={require("../../../assets/images/maos.jpg")}
        style={styles.imagem}
      />

      <Text style={styles.textoBemVindo}>Seja Bem Vindo!!</Text>

      <TouchableOpacity style={styles.botaoContainer}>
        <Text style={styles.botaoTexto}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
}
