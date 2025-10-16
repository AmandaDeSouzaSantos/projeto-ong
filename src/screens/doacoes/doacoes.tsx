import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/styleglobal";

export default function Doacoes() {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>

        <View style={globalStyles.cabecalho}>
          <Text style={globalStyles.titulo}>Doações</Text>
          <Image
            source={require("../../../assets/images/logo.png")} 
            style={globalStyles.logo}
          />
        </View>

        <Text style={globalStyles.texto}>
          Se você pode nos ajudar com qualquer tipo de doação, ficaremos felizes
          em recebê-la, seja em valores, roupas, alimentos não perecíveis,
          produtos de higiene e limpeza, móveis, eletroeletrônicos, entre outros.
        </Text>

        <Text style={globalStyles.texto}>
          Com o pouco de muitos conseguiremos fazer uma grande mudança e
          impactar vidas. Para doação de valores, entre no nosso site:
        </Text>

        <Link href="https://www.alegriadoamanha.org/suadoacao" asChild>
          <TouchableOpacity style={globalStyles.botao}>
            <Text style={globalStyles.botaoTexto}>Site</Text>
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
