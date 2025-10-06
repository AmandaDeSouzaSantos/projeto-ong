import React from "react";
import { Image, Text, TouchableOpacity, View , ScrollView} from "react-native";
import { styles } from "./styles";
import { Link } from "expo-router";

export default function Opcoes() {
  return (
     <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Associação Alegria do Amanhã</Text>

        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />

      <TouchableOpacity style={styles.botao} >
        <Text style={styles.botaoTexto}>Ações</Text>
        <Text style={styles.seta}>{">"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Doações</Text>
        <Text style={styles.seta}>{">"}</Text>
      </TouchableOpacity>

      <Link href="/sobrenos" asChild>
              <TouchableOpacity style={styles.botao}>
                <Text style={styles.botaoTexto}>Sobre Nós</Text>
                <Text style={styles.seta}>{">"}</Text>
              </TouchableOpacity>
            </Link>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Contatos</Text>
        <Text style={styles.seta}>{">"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Parceiros</Text>
        <Text style={styles.seta}>{">"}</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
