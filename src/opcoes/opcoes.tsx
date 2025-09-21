import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const navigation = useNavigation();

  return (
    <View >
      <Text >Associação Alegria do Amanhã</Text>

      <View >
        <Image
          source={require("../../../assets/images/logo.png")}/>
      </View>

      {/* Botões de navegação */}
      <Pressable onPress={() => navigation.navigate("Acoes" as never)}>
        <Text>Ações</Text>
      </Pressable>

      <Pressable  onPress={() => navigation.navigate("Doacoes" as never)}>
        <Text >Doações</Text>
      </Pressable>

      <Pressable  onPress={() => navigation.navigate("Sobre" as never)}>
        <Text >Sobre Nós</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Contatos" as never)}>
        <Text>Contatos</Text>
      </Pressable>
    </View>
  );
}
