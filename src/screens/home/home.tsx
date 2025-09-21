import { Pressable, StyleSheet, Text, View } from "react-native";

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Associação Alegria do Amanhã</Text>
            <Text style={styles.descricao}>
                A Associação Alegria do Amanhã é uma instituição sem fins lucrativos.
                Fundada em 2004 como Associação Ebenézer.
                Em 2020 nossa ONG renasce com o nome Associação Alegria do Amanhã, 
                acreditando que podemos ajudar os necessitados a darem um passo rumo a um 
                futuro melhor, a recuperarem sua dignidade, até que consigam se restabelecer 
                diante da sociedade com trabalho e vida social digna para qualquer ser humano.
            </Text>

            <Pressable style={styles.card}>
                <Text style={styles.cardTitulo}>Doações </Text>
                <Text style={styles.cardDesc}>
                    Você pode nos ajudar com qualquer tipo de doação, ficaremos felizes 
                    em recebe-la, seja em valores, roupas, alimentos não perecíveis, 
                    produtos de higiene e limpeza, móveis, eletroeletrônicos, entre outros.
                </Text>
            </Pressable>
            <Pressable style={styles.card}>
                <Text style={styles.cardTitulo}>Atividas Culturais</Text>
                <Text style={styles.cardDesc}>Mudando vidas através da cultura.</Text>
            </Pressable>
            <Pressable style={styles.botao}>
                <Text style={styles.botaoTexto}>Saiba Mais</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#c0fae8ff",
  },
  botao: {
    backgroundColor: "#005639ff",
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  botaoTexto: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  descricao: {
    fontSize: 17,
    marginBottom: 20,
    marginTop: 20,
    color: "#005639ff",
    lineHeight: 20,
  },
  titulo: {
    fontSize: 45,
    fontWeight: "bold",
    color: "#10b981",
  },
  tituloSub: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#10b981",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#10b981",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    minHeight: 140,
    justifyContent: "center",
  },
  cardTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 18,
    color: "#fff",
  },
});
