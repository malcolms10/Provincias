import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native';
import imagem from '../assets/2.jpg'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Provincias {
  id: string;
  nome: string;
}

export default function Provincias({ navigation }) {

  const [provincias, setProvincias] = useState<Provincias[]>([]);

    useEffect(() => {
    // Pegar as províncias 
    const fetchProvinces = async () => {
      try {
        const response = await axios.get('https://angolaapi.onrender.com/api/v1/geography/provinces');
        setProvincias(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };    

    fetchProvinces();
  }, []);

  async function verMuni(nome) {
    try {
      // Armazenar o id localmente
      await AsyncStorage.setItem('itemNm', nome.toString());
      
      // Navegar para a próxima página
      navigation.navigate('Municipios');
    } catch (error) {
      console.error('Erro ao armazenar o ID:', error);
    }
  }

  return (
    <View style={{ flex: 1 }}>
    <ImageBackground
      source={imagem} style={{ height: '55%', borderRadius: 10 }}
    >
      <Text style={{ color: 'white', fontSize: 26, marginLeft: 14, marginTop: '30%', marginRight: 52, marginBottom: 3 }}>
        UM DOS
      </Text>
      <Text style={{ color: 'white', fontSize: 35, marginLeft: 14 }}>
        MAIORES DE AFRICA
      </Text>
    </ImageBackground>

    <ScrollView style={{ marginTop: '-40%', marginBottom: 12, padding: 6 }}>
      {provincias.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.7}
          style={{ backgroundColor: '#cc092f', padding: 30, borderRadius: 30, marginBottom: 14, marginHorizontal: 32 }}
          onPress={() => verMuni(item.nome)}
        >
          <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>
            {item.nome}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <StatusBar style="auto" />
  </View>
  );
}
