import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Ações() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Ações</Text>

            <Image
                source={require("../../../assets/images/logo.png")} 
                style={styles.logo}
            />
        </View> 
        <View style={styles.cardImagem}>
            <Text style={styles.cardTexto}>Adicionar Imagem carrosel</Text>
        </View>

      <Text style={styles.texto}>
        Essas ações mudam vidas,
e essas vidas vão mudar o mundo.

Por acreditarmos nisso, como a Associação Alegria do Amanhã, atuamos em diversas áreas, com palestras nas áreas da saúde física, mental e emocional, cursos de idiomas, eventos voltados para ações sociais. Sempre com a visão de possibilitar na vida de crianças, adolescentes e adultos uma nova perspectiva de vida.
        
      </Text>
        <Link href="/opcoes" asChild>
                      <TouchableOpacity style={styles.botaoVoltar}>
                        <Text style={styles.botaoNavegar}>{"<"}</Text>
                      </TouchableOpacity>
        </Link>
    </View>
    </ScrollView>
  );
}
