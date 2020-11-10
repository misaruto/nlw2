import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257e5",
    justifyContent: "center",
    padding: 40,
  },
  banner: {
    width: "100%",
    resizeMode: "contain",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
  },
  titleBold: {
    fontFamily: "Poppins_600SemiBold",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 4,
    justifyContent: "space-between",
  },
  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  },
  buttonPrimary: {
    backgroundColor: "#9871f5",
  },
  buttonSecondary: {
    backgroundColor: "#04d301",
  },
  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    fontSize: 20,
  },
  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",

    lineHeight: 20,
    marginTop: 40,
  },
});

export default styles;
