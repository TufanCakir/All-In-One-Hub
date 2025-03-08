// src/styles/MiniGamesStyles.js
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    marginBottom: 20,
    width: "100%",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "black",
  },
  button: {
    flex: 1,
    margin: 5,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: "center",
  },
});
