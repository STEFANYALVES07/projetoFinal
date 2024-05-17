import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { styles } from "../styles/StyleSheet";

export default function Localizacao() {
  const handleAddressPress = () => {
    // Abre o endereço no Google Maps quando o texto for clicado
    Linking.openURL("https://www.google.com/maps?q=SESI+436");
  };

  return (
    <View style={styles.container2}>
      <View style={styles.header}>
        <Image style={styles.fundo} source={require("../imagens/fundo.jpg")} />
      </View>
      <Image style={styles.logo} source={require("../imagens/logo.jpeg")} />
      <Text style={styles.txt}>Localização</Text>
      <Image style={styles.mapImage} source={require("../imagens/Mapa.png")} />
      <TouchableOpacity onPress={handleAddressPress}>
        <Text style={styles.end}>
          Endereço: SESI 436 - R. dos Jacarandás, 100 - Jardim das Palmeiras,
          Nova Odessa - SP, 13460-000
        </Text>
      </TouchableOpacity>
    </View>
  );
}
