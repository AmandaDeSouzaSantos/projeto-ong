import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/styleglobal";

export default function Contatos() {
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>

        <View style={globalStyles.cabecalho}>
          <Text style={globalStyles.titulo}>Contatos</Text>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={globalStyles.logo}
          />
        </View>

        <View style={globalStyles.cardImagem}>
          <Text style={globalStyles.cardTexto}>Adicionar Imagem Contatos</Text>
        </View>

        <Text style={globalStyles.texto}>
          Caso queira falar conosco, entre em contato pelos nossos canais de comunicação.
        </Text>

        <Text style={globalStyles.texto}>
          📧 Email: contato@alegriadoamanha.org
        </Text>

        <Text style={globalStyles.texto}>
          ☎️ Telefone: (11) 99999-9999
        </Text>

        <Text style={globalStyles.texto}>
          Ou, se preferir, acesse o site e preencha o formulário:
        </Text>

        <Link href="https://www.alegriadoamanha.org/contato" asChild>
          <TouchableOpacity style={globalStyles.botao}>
            <Text style={globalStyles.botaoTexto}>Entrar em contato</Text>
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
