import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", 
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: "contain",
    marginTop: 20,
  },
  imagem: {
    width: "100%",
    height: 450,
    resizeMode: "cover",
    borderRadius: 10,
  },
  textoBemVindo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 20,
  },
  botaoContainer: {
    backgroundColor: "#166534", // verde escuro
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  botaoTexto: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
  },
});
