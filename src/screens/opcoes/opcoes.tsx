import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Opcoes() {
  return (
     <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Associação Alegria do Amanhã</Text>

        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Link href="/acoes" asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Ações</Text>
                <Text style={styles.seta}>{">"}</Text>
              </TouchableOpacity>
            </Link>

      <Link href="/doacoes" asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Doações</Text>
                <Text style={styles.seta}>{">"}</Text>
              </TouchableOpacity>
            </Link>

      <Link href="/sobrenos" asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Sobre Nós</Text>
                <Text style={styles.seta}>{">"}</Text>
              </TouchableOpacity>
            </Link>
      <Link href="/contatos" asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Contatos</Text>
                <Text style={styles.seta}>{">"}</Text>
              </TouchableOpacity>
            </Link>
      <Link href="/opcoes" asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Contatos</Text>
                <Text style={styles.seta}>{">"}</Text>
              </TouchableOpacity>
            </Link>
      
    </View>
    </ScrollView>
  );
}
