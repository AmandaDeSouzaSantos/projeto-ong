import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/styleglobal";
import { getAcoesImages, ImageItem } from "../../../scripts/acoes";

export default function Acoes() {
  const [imagens, setImagens] = useState<ImageItem[]>([]);
  const [indiceAtual, setIndiceAtual] = useState(0); 

  useEffect(() => {
    const loadImagens = async () => {
      const data = await getAcoesImages();
      setImagens(data);
      console.log(data);
    };
    loadImagens();
  }, []);

  const proximaImagem = () => {
    if (imagens.length === 0) return;
    setIndiceAtual((prev) => (prev + 1) % imagens.length); 
  };

  const imagemAtual = imagens[indiceAtual]; 
  return (
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.container}>
    
        <View style={globalStyles.cabecalho}>
          <Text style={globalStyles.titulo}>Ações</Text>
          <Image source={require("../../../assets/images/logo.png")} style={globalStyles.logo} />
        </View>

        {imagemAtual && (
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Image
              source={{ uri: imagemAtual.url }}
              style={globalStyles.cardImagemItem}
            />
            <TouchableOpacity
              onPress={proximaImagem}
              style={globalStyles.botaoopcao}
            >
              <Text style={globalStyles.botaoTexto}>Proximo</Text>
            </TouchableOpacity>
          </View>
        )}


        <Text style={globalStyles.texto}>
          Essas ações mudam vidas, e essas vidas vão mudar o mundo.
        </Text>
        <Text style={globalStyles.texto}>
          Por acreditarmos nisso, a Associação Alegria do Amanhã atua em diversas áreas, com
          palestras sobre saúde física, mental e emocional, cursos de idiomas, e eventos voltados
          para ações sociais. Sempre com o objetivo de oferecer às crianças, adolescentes e adultos
          uma nova perspectiva de vida.
        </Text>

       
        <Link href="/opcoes" asChild>
          <TouchableOpacity style={globalStyles.botaoVoltar}>
            <Text style={globalStyles.botaoNavegar}>{"<"}</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
