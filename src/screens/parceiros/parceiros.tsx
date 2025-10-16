import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/styleglobal";

export default function Parceiros() {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
   
        <View style={globalStyles.cabecalho}>
          <Text style={globalStyles.titulo}>Parceiros</Text>

          <Image
            source={require("../../../assets/images/logo.png")}
            style={globalStyles.logo}
          />
        </View>

        <Text style={globalStyles.texto}>
          Nossos parceiros têm o prazer em cooperar financeiramente ou através
          de sua mão de obra especializada e qualificada, para viabilizar cada
          um dos nossos projetos. Juntos, chegamos cada vez mais longe nesse
          desafio de ajudar a mudar vidas.
        </Text>

        <Text style={globalStyles.texto}>
          O foco principal de cada uma dessas empresas é amar o próximo e
          entender que a ajuda deles pode mudar vidas!
        </Text>

        <Link href="https://www.alegriadoamanha.org/contato" asChild>
          <TouchableOpacity style={globalStyles.botao}>
            <Text style={globalStyles.botaoTexto}>Torne-se um Parceiro</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/opcoes" asChild>
          <TouchableOpacity style={globalStyles.botaoVoltar}>
            <Text style={globalStyles.botaoNavegar}>{"<"}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
