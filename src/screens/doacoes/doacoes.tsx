import { Link } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export default function Doacoes() {
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Doações</Text>

            <Image
                source={require("../../../assets/images/logo.png")} 
                style={styles.logo}
            />
        </View> 
        <View style={styles.cardImagem}>
            <Text style={styles.cardTexto}>Adicionar Imagem Doacoes</Text>
        </View>

      <Text style={styles.texto}>
       Se você pode nos ajudar com qualquer tipo de doação, ficaremos felizes em recebe-la, seja em valores, roupas, alimentos não perecíveis, produtos de higiene e limpeza, móveis, eletroeletrônicos, entre outros...

​

Com o pouco de muitos conseguiremos fazer uma grande mudança e impactar vidas.
Para Doação de valores entre no nosso site:
        
      </Text>
            <Link href="https://www.alegriadoamanha.org/suadoacao" >
                    <TouchableOpacity style={styles.botao}>
                      <Text style={styles.botaoTexto}>Site</Text>
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
