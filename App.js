import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export default function App() {
  const [resultCoins, setResultCoins] = useState(0);
  const [resultPoins, setResultPoints] = useState(0);
  const [btnRigth, setBtnRigth] = useState(0);
  const [btnCenter, setBtnCenter] = useState(0);
  const [btnLeft, setBtnLeft] = useState(0);

  function chegarJogo() {
    const points = points + 100;
    const coins = coins + 100;
    if (btnRigth == 7 && btnCenter == 7 && btnLeft == 7) {
      setResultCoins(points);
      setResultPoints(coins);
      console.log("VC É O GANHADOR");
    }
    if (
      (btnRigth == 7 && btnCenter == 7) ||
      (btnRigth == 7 && btnLeft == 7) ||
      btnLeft == 7
    ) {
      setResultCoins(resultCoins + 2);
      setResultPoints(resultPoins + 2);
      console.log("VC ganhou 2 pontos e 2 moedas");
    }
    if (btnRigth == 7 || btnCenter == 7 || btnLeft == 7) {
      setResultCoins(resultCoins + 1);
      setResultPoints(resultPoins + 1);
      console.log("VC ganhou 1 ponto e 1 moeda");
    }
    if (btnRigth != 7 && btnCenter != 7 && btnLeft != 7) {
      setResultCoins(resultCoins - 1);
    }
    if (resultCoins === 0) {
      console.log("Fim de jogo para voce game over");
    }
  }

  //new Aposta

  function newAposta() {
    const btnRigth = Math.floor(Math.random() * 8);
    const btnCenter = Math.floor(Math.random() * 8);
    const btnLeft = Math.floor(Math.random() * 8);
    setBtnRigth(btnRigth);
    setBtnCenter(btnCenter);
    setBtnLeft(btnLeft);
    chegarJogo();
  }

  //Novo Jogo
  function newGame() {
    const coins = 20;
    const points = 0;
    setResultCoins(coins);
    setResultPoints(points);
  }
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 50,
          marginLeft: 22,
          marginBottom: 10,
          fontSize: 35,
        }}
      >
        CAÇA NIQUEL
      </Text>

      <View style={styles.containerButton}>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            backgroundColor: "#9F8B42",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>{btnRigth}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            backgroundColor: "#9F8B42",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>{btnCenter}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            backgroundColor: "#9F8B42",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={styles.text}>{btnLeft}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>Quantidade de moeda</Text>
        <Text style={styles.text}>{resultCoins}</Text>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>Pontuação</Text>
        <Text style={styles.text}>{resultPoins}</Text>
      </View>

      <View style={styles.containerOptions}>
        <TouchableOpacity
          onPress={newAposta}
          style={{
            width: 100,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#9F8B42",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Apostar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={newGame}
          style={{
            width: 100,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#9F8B42",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Novo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 100,
            height: 40,
            borderRadius: 10,
            backgroundColor: "#9F8B42",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 10,
    width: "100%",
  },
  containerText: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    top: 25,
    alignSelf: "center",
  },
  text: {
    fontSize: 25,
  },
  containerOptions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    top: 120,
  },
});
