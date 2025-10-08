import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cabecalho:{
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: "center",
    },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 20,
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
    marginBottom: 20,
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
    width: "90%",
    height: 300,
    backgroundColor: "#e5e7eb", // cinza claro
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
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
