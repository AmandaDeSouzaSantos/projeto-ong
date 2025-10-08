import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Parceiros() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Parceiros</Text>

            <Image
                source={require("../../../assets/images/logo.png")} 
                style={styles.logo}
            />
        </View> 

      <Text style={styles.texto}>
       Nossos parceiros tem o prazer em cooperar financeiramente, ou então através de sua mão de obra especializada e qualificada, para viabilizar cada um dos nossos projetos. E juntos chegarmos cada vez mais longe nesse nosso desafio de ajudar a mudar vidas.

O foco principal de cada uma dessas empresas é amar o próximo.​ E entendem que a ajuda deles pode mudar vidas!
        
      </Text>
            <Link href="https://www.alegriadoamanha.org/contato" >
                    <TouchableOpacity style={styles.botao}>
                      <Text style={styles.botaoTexto}>Torne-se um Parceiro</Text>
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
