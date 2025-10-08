import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function NossaHistoria() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Nossa Historia</Text>

            <Image
                source={require("../../../assets/images/logo.png")} 
                style={styles.logo}
            />
        </View>
        <View style={styles.conteudo}> 
          <View style={styles.cardImagem}>
              <Text style={styles.cardTexto}>Adicionar Imagem</Text>
          </View>

          <Text style={styles.texto}>
            Fundada em 2004 como Associação Ebenézer, nossas atividades se iniciaram com auxílio à população com o apoio do Governo, distribuindo Leite da campanha Leve Leite; foi possível também realizar alguns eventos beneficentes com doação de alimentos, roupas e brinquedos para crianças carentes.
    ​
    Em 2020 nossa ONG renasce com o nome Associação Alegria do Amanhã, acreditando que podemos ajudar os necessitados a darem um passo rumo a um futuro melhor, a recuperarem sua dignidade, até que consigam se restabelecer diante da sociedade com trabalho e vida social digna para qualquer ser humano.
          </Text>
          <Link href="/sobrenos" asChild>
                        <TouchableOpacity style={styles.botaoVoltar}>
                          <Text style={styles.botaoNavegar}>{"<"}</Text>
                        </TouchableOpacity>
          </Link>
        </View>
    </View>
    </ScrollView>
  );
}
