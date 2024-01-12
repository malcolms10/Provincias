import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import imagem from './assets/1.jpg'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Provincias from './pages/Provincias';
import Municipios from './pages/Municipios';



const Home = ({ navigation }) => (
  
    <View className='flex-1'>
      <ImageBackground
        source={imagem} className='h-[88%] rounded-br-[65px]'>
        <Text className='text-white text-[50px] ml-8 mt-[73%] mr-52'>
          Angola país grande e belo!
        </Text>
      </ImageBackground>

      <View>
        <TouchableOpacity activeOpacity={0.7} 
        className='bg-ndozy p-6 rounded-full mx-16 -mt-10'
        onPress={() => navigation.navigate('Provincias')}>
          <Text className='text-center text-white text-lg'>
            ENTRAR
          </Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </View>
  
);

// Configuração da pilha de navegação
const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="PaginaInicial" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Provincias" component={Provincias} options={{ headerShown: false }} />
      <Stack.Screen name="Municipios" component={Municipios} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
