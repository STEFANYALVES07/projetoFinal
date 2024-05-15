import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "../styles/StyleSheet";

import AntDesign from "@expo/vector-icons/AntDesign";

export default function App() {
  const Acais = [
    { key: 1, sabor: "Açaí tradicional", valor: 30.0 },
    { key: 2, sabor: "Açaí com ninho", valor: 45.0 },
    { key: 3, sabor: "Açaí com frozen", valor: 45.0 },
  ];

  const [selectedAcai, setSelectedAcai] = useState(Acais[0].key);

  let AcaisItem = Acais.map((Acai, index) => (
    <Picker.Item key={index} value={Acai.key} label={Acai.sabor} />
  ));

  return (
    <View style={styles.container2}>
      <View style={styles.header}></View>
      <Image style={styles.logo} source={require("../imagens/logo.jpeg")} />
      <Text style={styles.title}>Escolha o tamanho do seu Açaí de 1L</Text>
      <Picker
        selectedValue={selectedAcai}
        onValueChange={(itemValue) => setSelectedAcai(itemValue)}
        style={styles.picker}
        itemStyle={styles.pickerItem}
      >
        {AcaisItem}
      </Picker>
      {selectedAcai !== null ? (
        <Text style={styles.text}>
          Açaí Selecionado:{" "}
          <Text style={styles.textPizza}>
            {Acais.find((Acai) => Acai.key == selectedAcai).sabor}
          </Text>
          {" - "}
          <Text style={styles.textPrice}>
            R$ {Acais.find((Acai) => Acai.key == selectedAcai).valor}
          </Text>
        </Text>
      ) : (
        <Text style={styles.text}>Açaí Selecionado: {" - "}</Text>
      )}

      <TouchableOpacity
        style={{
          backgroundColor: "#6e07ad",
          width: 200,
          padding: 5,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-beetwen",
            alignItems: "center",
            flex: 1,
          }}
        >
          <AntDesign name="shoppingcart" size={24} color="white" />
          <Text style={{ color: "white" }}> Adicionar ao carrinho</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
