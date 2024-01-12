import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Municipios {
  id: string;
  nome: string;
}

export default function Municipios({ navigation }) {

  const [municipios, setMunicipios] = useState<Municipios[]>([]);
  const [nome, setNome] = useState('')

  useEffect(() => {
    async function obterIdArmazenado() {
        try {
            const itemNm = await AsyncStorage.getItem('itemNm');
              
            if (itemNm !== null) {
                // Use o itemId conforme necessário
            console.log('ID armazenado:', itemNm);
            setNome(itemNm)
            //const response = await axios.get(`https://angolaapi.onrender.com/api/v1/geography/provinces/${id}`);
            //console.log('Detalhes da Província:', response.data);
            } else {
             console.log('Nenhum ID armazenado.');
            }
            } catch (error) {
              console.error('Erro ao obter o ID armazenado:', error);
            }

        }
    obterIdArmazenado()

    const fetchProvinces = async () => {
        

      try {
        {/*botão de voltar e apagar a província*/}
        const response = await axios.get('https://angolaapi.onrender.com/api/v1/geography/provinces');
        setMunicipios(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };    

    fetchProvinces();
  }, []);

  return (
    <View style={{ flex: 1 }}>
        <View style={{ height: '30%', borderBottomRightRadius: 65, backgroundColor: '#cc092f', marginBottom: 40 }}>
        <Text style={{ color: 'white', fontSize: 26, marginLeft: 20, marginTop: '30%', marginRight: 52, marginBottom: 3 }}>
            {nome}
        </Text>
        <Text style={{ color: 'white', fontSize: 35, marginLeft: 20 }}>
            MUNICIPIOS
        </Text>
        </View>

        <ScrollView style={{ marginBottom: 20 }}>
        {municipios.map((item, index) => (
            <View key={index} style={{ borderBottomWidth: 2, borderBottomColor: '#cc092f', width: '80%', marginLeft: 35 }}>
            <Text style={{ color: 'black', fontSize: 20, marginBottom: 15, marginTop: 18 }}>
                {item.nome}
            </Text>
            </View>
        ))}
        </ScrollView>

        <StatusBar style="auto" />
    </View>
  );
}
