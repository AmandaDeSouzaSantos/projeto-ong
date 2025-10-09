import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "#025220ff"
  },
  container: {
    flex: 1,
    padding: 20,
   alignItems: 'center'
  },
   cabecalho:{
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
   conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    margin: 20,
    borderRadius: 20,
    maxWidth: 1000
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#166534",
    marginBottom: 10
  },
  logo: {
    width: 180,
    height: 80,
    resizeMode: "contain",
    marginBottom: 15,
  },
  texto: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    backgroundColor: "#f8fcf9ff",
    borderRadius: 20,
    padding: 15,
    margin: 15
  },
  botao: {
    backgroundColor: "#16a34a", // verde
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 20,
  },
  botaoTexto: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
  cardImagem: {
    maxHeight : 400,
    backgroundColor: "#f8fcf9ff",
    borderRadius: 20,
    padding: 15,
    margin: 15
  },
  cardTexto: {
    color: "#333",
    fontSize: 16,
  },
   botaoContainer: {
    backgroundColor: "#166534", // verde escuro
    width: 40,
    height: 40,
    marginRight: 'auto',
    marginTop: 20,
    alignItems: 'center',
    alignContent:'center'
  },
  botaoVoltar: {
    backgroundColor: "#166534", // verde escuro
    width: 40,
    height: 40,
    marginRight: 'auto',
    marginTop: 20,
    alignItems: 'center',
    alignContent:'center'
  },
   botaoNavegar: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  }
});
