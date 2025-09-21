import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFDF6",
    alignItems: "center",
    paddingTop: 40,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00994d",
    marginBottom: 12,
    textAlign: "center",
  },
  logo: {
    width: '100%',
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 80,
    resizeMode: "contain",
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#00A651",
    paddingVertical: 20,
    paddingHorizontal: 34,
    borderRadius: 12,
    width: "80%",
    marginBottom: 18,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "600",
  },
  seta: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
