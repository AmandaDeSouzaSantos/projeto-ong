import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/styleglobal";

export default function NossaHistoria() {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>

        <View style={globalStyles.cabecalho}>
          <Text style={globalStyles.titulo}>Nossa História</Text>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={globalStyles.logo}
          />
        </View>

        <View style={globalStyles.cardImagem}>
          <Text style={globalStyles.cardTexto}>Adicionar Imagem</Text>
        </View>

        <Text style={globalStyles.texto}>
          Fundada em 2004 como Associação Ebenézer, nossas atividades se
          iniciaram com auxílio à população com o apoio do Governo,
          distribuindo Leite da campanha Leve Leite; foi possível também
          realizar alguns eventos beneficentes com doação de alimentos,
          roupas e brinquedos para crianças carentes.
        </Text>

        <Text style={globalStyles.texto}>
          Em 2020, nossa ONG renasce com o nome Associação Alegria do Amanhã,
          acreditando que podemos ajudar os necessitados a darem um passo rumo
          a um futuro melhor, a recuperarem sua dignidade, até que consigam se
          restabelecer diante da sociedade com trabalho e vida social digna
          para qualquer ser humano.
        </Text>

        <Link href="/sobrenos" asChild>
          <TouchableOpacity style={globalStyles.botaoVoltar}>
            <Text style={globalStyles.botaoNavegar}>{"<"}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
