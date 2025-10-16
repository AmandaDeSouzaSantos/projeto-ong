import { Link } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/styleglobal";

export default function Home() {
  return (
    <ImageBackground
      source={require("../../../assets/images/maos.jpg")}
      style={globalStyles.background}
      resizeMode="cover"
    >
      <View style={globalStyles.containerhome}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={globalStyles.logo}
        />

        <Text style={globalStyles.tituloBranco}>Seja Bem-Vindo!!</Text>

        <Link href="/opcoes" asChild>
          <TouchableOpacity style={globalStyles.botaoBranco}>
            <Text style={globalStyles.botaoTextoVerde}>+</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ImageBackground>
  );
}
