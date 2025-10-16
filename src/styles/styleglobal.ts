import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#1b7a41",
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
  },

  cabecalho: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 150,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#dffae9ff",
    textAlign: "center",
    marginBottom: 10,
  },

  cardImagem: {
    borderRadius: 20,
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  cardImagemItem: {
    borderRadius: 20,
    width: 400,
    height: 220,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  cardTexto: {
    color: "#dffae9ff",
    fontSize: 14,
  },

  texto: {
    fontSize: 16,
    color: "#dffae9ff",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#dffae9ff",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  botaoTexto: {
    color: "#166534",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoVoltar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: "#dffae9ff",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },

  botaoNavegar: {
    color: "#1b7a41",
    fontSize: 22,
    fontWeight: "bold",
  },

  botaoopcao: {
    backgroundColor: "#dffae9ff",
    width: "75%",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  containerhome: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.4)", // leve escurecimento para contraste
  },

  // 🔹 NOVOS ESTILOS ESPECÍFICOS PARA A HOME 🔹
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  tituloBranco: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },

  botaoBranco: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },

  botaoTextoVerde: {
    color: "#1b7a41",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
