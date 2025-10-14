import { Link } from "expo-router";
import React from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/styleglobal";

export default function Home() {
  return (
    <ScrollView >
      <ImageBackground
        source={require("../../../assets/images/maos.jpg")}
      >
        <View style={globalStyles.containerhome}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={globalStyles.logo}
          />

          <Text style={globalStyles.titulo}>Seja Bem-Vindo!!</Text>

          <Link href="/opcoes" asChild>
            <TouchableOpacity style={globalStyles.botao}>
              <Text style={globalStyles.botaoTexto}>+</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
