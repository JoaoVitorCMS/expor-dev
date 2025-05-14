import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function HomeScreen(){

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const onPress = () => {
        router.push("/(tabs)")
    }
    return(
        <>
         <SafeAreaView>
             <Text>Login</Text>
             <Text>Email</Text>
            
             <TextInput style={styles.input} onChangeText={setEmail} placeholder="Digite seu email" keyboardType="email-address"/>
             <Text>Senha</Text>
             <TextInput  style={styles.input}  onChangeText={setPass} placeholder="Digite seu email" keyboardType="default"/>
         </SafeAreaView>
         <View>
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.btnText}>Entrar</Text>
            </TouchableOpacity>
         </View>
         <View>
            <Link href={"/register"}>Cadastrar novo usuario</Link>
         </View>
        </>
    )
}



const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        color: 'white',
        backgroundColor: 'black'
    },
    btn:{
        backgroundColor: "black",
        color: "white"
    },
    btnText:{
        color: "green"
    }
})