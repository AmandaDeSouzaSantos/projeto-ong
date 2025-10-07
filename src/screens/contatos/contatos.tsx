import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Contatos() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <Text style={styles.titulo}>Contatos</Text>

          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>

        <View style={styles.cardImagem}>
          <Text style={styles.cardTexto}>Adicionar Imagem Contatos</Text>
        </View>

        <Text style={styles.texto}>
          Caso queira falar conosco, entre em contato pelos nossos canais de comunicação.
        </Text>

        <Text style={styles.texto}>
          📧 Email: contato@alegriadoamanha.org
        </Text>

        <Text style={styles.texto}>
          ☎️ Telefone: (11) 99999-9999
        </Text>

        <Text style={styles.texto}>
          Ou, se preferir, acesse o site e preencha o formulário:
        </Text>

        <Link href="https://www.alegriadoamanha.org/contato">
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Entrar em contato</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/opcoes" asChild>
          <TouchableOpacity style={styles.botaoVoltar}>
            <Text style={styles.botaoNavegar}>{"<"}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
