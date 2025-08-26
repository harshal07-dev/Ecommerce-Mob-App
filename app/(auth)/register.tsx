import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  return (
    <SafeAreaView style={{flex:1, alignItems: 'center' , backgroundColor: 'white'}}>
    <Image source={require('../../assets/images/logo.png')} style={{width: 150, height: 100}}/>
   <KeyboardAvoidingView>
    <View style={{alignItems: 'center'}}>
     <Text style={{fontSize: 17, fontWeight: "bold", marginTop: 10, color: '#041E42'}}>Register to your account</Text>
    </View>
    <View style={{marginTop: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 5, paddingVertical: 5, backgroundColor: '#D0D0D0', marginTop: 30}}>
      <FontAwesome5 name="user-alt" size={20} color='#041E42' style={{marginLeft:8, color: 'gray'}}/>
        <TextInput placeholder="Enter your name" style={{color: 'gray', marginVertical: 10 , width: 300, fontSize:email ? 16 : 16}} value={name} onChangeText={(text) => setName(text)}/>
      </View>
    </View>

    <View style={{marginTop: 10}}>
      <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 5, paddingVertical: 5, backgroundColor: '#D0D0D0', marginTop: 30}}>
        <MaterialIcons name='mail' size={24} color='#041E42' style={{marginLeft:8, color: 'gray'}}/>
        <TextInput placeholder="Enter your Email" style={{color: 'gray', marginVertical: 10 , width: 300, fontSize:email ? 16 : 16}} value={email} onChangeText={(text) => setEmail(text)}/>
      </View>
    </View>

    <View style={{marginTop: 10}}>
    <View style={{flexDirection: 'row', alignItems: 'center', borderRadius: 5, paddingVertical: 5, backgroundColor: '#D0D0D0', marginTop: 30}}>
        <MaterialIcons name='lock' size={24} color='#041E42' style={{marginLeft:8, color: 'gray'}}/>
        <TextInput placeholder="Enter your Password" style={{color: 'gray', marginVertical: 10 , width: 300, fontSize:password ? 16 : 16}} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />
      </View>
    </View>

    <View style={{marginTop: 12, flexDirection: 'row', alignItems: 'center' , justifyContent: 'space-between'}}>
      <Text>Keep me logged In</Text>
      <Text style={{color: "#007FFF", fontWeight: 500}}>Forget Password ? </Text>
    </View>

    <View style={{marginTop: 80}}/>
    <Pressable style={{width: 200, backgroundColor: "#FEBE10", borderRadius: 6, marginLeft: 'auto', marginRight: 'auto', padding: 10}}> 
          <Text style={{textAlign: 'center', color: "#fff" , fontSize: 16, fontWeight: 'bold'}}>Login</Text>
    </Pressable>
    
    <Pressable style={{marginTop: 15}} onPress={() => router.push('/login')}>
      <Text style={{textAlign: 'center', color: 'gray', fontSize: 16}}>Don't have an account? Sign Up</Text>
    </Pressable>
   </KeyboardAvoidingView>
   </SafeAreaView>
  )
}