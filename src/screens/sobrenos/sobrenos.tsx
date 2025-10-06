import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView} from "react-native";
import { Link } from "expo-router";
import {styles} from "./styles"

export default function SobreNos() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Sobre Nós</Text>

            <Image
                source={require("../../../assets/images/logo.png")} 
                style={styles.logo}
            />
        </View> 

      <Text style={styles.texto}>
        O propósito do ONG é transformar a sociedade e a vida das pessoas,
        promovendo valores humanos.
        {"\n\n"}
        Ajudando os mais necessitados, a organização foca nas ações na formação
        educacional e cultural de crianças, adolescentes e jovens para que elas
        possam ter autonomia e transformar suas próprias realidades.
      </Text>

     
      <Link href="/nossahistoria" asChild>
              <TouchableOpacity style={styles.botaoHistoria}>
                <Text style={styles.botaoNavegar}>Nossa Historia</Text>
              </TouchableOpacity>
        </Link>

      <View style={styles.cardImagem}>
        <Text style={styles.cardTexto}>Adicionar Imagem</Text>
      </View>
        <Link href="/opcoes" asChild>
              <TouchableOpacity style={styles.botaoVoltar}>
                <Text style={styles.botaoNavegar}>{"<"}</Text>
              </TouchableOpacity>
        </Link>
    </View>
    </ScrollView>
  );
}
