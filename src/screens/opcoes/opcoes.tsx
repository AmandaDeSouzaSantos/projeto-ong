import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/styleglobal";

export default function Opcoes() {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.titulo}>Associação Alegria do Amanhã</Text>

        <Image
          source={require("../../../assets/images/logo.png")}
          style={globalStyles.logo}
        />

        <Link href="/acoes" asChild>
          <TouchableOpacity style={globalStyles.botaoopcao}>
            <Text style={globalStyles.botaoTexto}>Ações</Text>
            <Text style={globalStyles.botaoNavegar}>{">"}</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/doacoes" asChild>
          <TouchableOpacity style={globalStyles.botaoopcao}>
            <Text style={globalStyles.botaoTexto}>Doações</Text>
            <Text style={globalStyles.botaoNavegar}>{">"}</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/sobrenos" asChild>
          <TouchableOpacity style={globalStyles.botaoopcao}>
            <Text style={globalStyles.botaoTexto}>Sobre Nós</Text>
            <Text style={globalStyles.botaoNavegar}>{">"}</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/contatos" asChild>
          <TouchableOpacity style={globalStyles.botaoopcao}>
            <Text style={globalStyles.botaoTexto}>Contatos</Text>
            <Text style={globalStyles.botaoNavegar}>{">"}</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/parceiros" asChild>
          <TouchableOpacity style={globalStyles.botaoopcao}>
            <Text style={globalStyles.botaoTexto}>Parceiros</Text>
            <Text style={globalStyles.botaoNavegar}>{">"}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
