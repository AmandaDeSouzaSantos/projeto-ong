import { Pressable, StyleSheet, Text, View } from "react-native";

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Feliz Vida</Text>
            <Text style={styles.tituloSub}>ONG</Text>
            <Text style={styles.descricao}>
                A ONG Feliz Vida é uma instituição sem fins lucrativos dedicada ao
                resgate de famílias em situação de vulnerabilidade, por meio de ações
                socioeducativas e doações de alimentos para a população mais carente.
            </Text>

            <Pressable style={styles.card}>
                <Text style={styles.cardTitulo}>Doações de Alimentos</Text>
                <Text style={styles.cardDesc}>
                    Ajude famílias em situação de vulnerabilidade com sua contribuição.
                </Text>
            </Pressable>
            <Pressable style={styles.card}>
                <Text style={styles.cardTitulo}>Aulas de Música</Text>
                <Text style={styles.cardDesc}>Mudando vidas através da música.</Text>
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
    fontSize: 20,
    marginBottom: 20,
    marginTop: 40,
    color: "#005639ff",
    lineHeight: 28,
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
