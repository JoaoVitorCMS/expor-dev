import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function register (){
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [pass, setPass] = useState("")

    const onPress = () => {
        router.push("/")
    }
    return(
        <>
         <SafeAreaView style={styles.container}>
             <Text>Registro</Text>
             <Text>Email</Text>
            
             <TextInput style={styles.input} onChangeText={setEmail} placeholder="Digite seu email" keyboardType="email-address"/>
             <TextInput style={styles.input} onChangeText={setName} placeholder="Digite seu nome" keyboardType="default"/>
             <TextInput style={styles.input} onChangeText={setPass} placeholder="Digite seu senha" keyboardType="default"/>
             
             <TextInput style={styles.input} onChangeText={setPass} placeholder="Confirme sua senha" keyboardType="default"/>
        
         <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
         </View>
         </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },
  
    input: {
      width: '100%',
      marginVertical: 10,
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 8,
      backgroundColor: '#fff',
      color: '#333',
      fontSize: 16,
      borderWidth: 1,
      borderColor: '#ccc',
    },
  
    btn: {
      marginTop: 20,
      backgroundColor: '#4CAF50',
      paddingVertical: 14,
      paddingHorizontal: 25,
      borderRadius: 8,
      alignItems: 'center',
      width: '100%',
    },
  
    btnText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  
    label: {
      alignSelf: 'flex-start',
      marginBottom: 5,
      color: '#555',
      fontSize: 14,
    },
  
    link: {
      marginTop: 15,
      color: '#2196F3',
      fontSize: 14,
    }
  });

