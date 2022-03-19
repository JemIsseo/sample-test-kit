import React, { useState } from "react";
import { View, Image, Text, Dimensions, TextInput,StyleSheet, Alert } from "react-native";
import LottieView from 'lottie-react-native';
import { processFontFamily } from "expo-font";
import { Button} from "react-native-elements";


export default function TabOneScreen() {
  const [fname,setFname] = React.useState<string>("");
  const [lname,setLname] = React.useState<string>("");
  const [email,setEmailText] = React.useState<string>("");
  const [password,setPassword] = React.useState<string>("");
  const [cpassword,setCPassword] = React.useState<string>("");


  const handleAlertMessage = () => {
    const Email_address = "jeremiahcancino04@gmail.com";
    const Password = "krasskita";

    Alert.alert("Message", "Do you want to save your password?",
              [
                {
                  text:"Save password",
                  style: "default",
                  onPress: () => {if(email==Email_address && password==Password){
                    Alert.alert("Login", "Login Successfully");
                  }
                  else{
                    Alert.alert("Error", "Incorrect email or password");
                  }
                    console.log("Saved")
                  }
                },
                {
                  text:"Never",
                  style: "default",
                  onPress: () => {if(email==Email_address && password==Password){
                    Alert.alert("Login", "Login Successfully");
                  }
                  else{
                    Alert.alert("Error", "Incorrect email or password");
                  }
                    console.log("Not saved")
                  }
                }
              ]
              );
  }
  return (
    <View
      style={style.container}
    >
      <View style={{
        flex: 1,
      }}>
        <LottieView
          source={require('../assets/lottie/90397-log-in.json')}
          autoPlay={true}
          loop={true}
          
          style={{
            flex: 1,  
            marginLeft: '1%',
            marginBottom: '-10%',
           
           
          }}
        />
      </View>
      <View style={{
        flex: 2,
      }}>
           <Text style={style.textStyle}>
              First Name
              </Text>
         
           
           <TextInput
          style={style.input}
        onChangeText={setFname}
          value={fname}
          keyboardType={"default"}
          placeholder ={"YOUR FIRST NAME"}
          autoCapitalize={"none"}
          />

           <Text style={style.textStyle}>
              Last Name
              </Text>
              <TextInput
          style={style.input}
        onChangeText={setLname}
          value={lname}
          placeholder ={"YOUR LAST NAME"}
          secureTextEntry={true}
          />
       <Text style={style.textStyle}>
              Email
              </Text>
         
           
           <TextInput
          style={style.input}
        onChangeText={setEmailText}
          value={email}
          keyboardType={"email-address"}
          placeholder ={"YOUR EMAIL ADDRESS"}
          autoCapitalize={"none"}
          />
          <Text style={style.textStyle}>
              Confirm Password
              </Text>
              <TextInput
          style={style.input}
        onChangeText={setPassword}
          value={password}
          placeholder ={"YOUR PASSWORD"}
          secureTextEntry={true}
          />
          <Text style={style.textStyle}>
              Password
              </Text>
              <TextInput
          style={style.input}
        onChangeText={setCPassword}
          value={cpassword}
          placeholder ={"CONFIRM PASSWORD"}
          secureTextEntry={true}
          />

        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
           < Button
            title={"SUBMIT"}
            titleStyle={{
              fontSize: 15, 
              fontFamily: 'RobotoCondensed-Bold',
              color: '#dae0e4'
            }}
            buttonStyle={{
              backgroundColor: '#2381EE',
              height: 50,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10, marginTop:20
            }}
            type={"solid"}
            onPress={handleAlertMessage}
           />
        
        
         
           
           
          </View>
        </View>

      </View>
     
    </View>
  );
}


const style = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#05435b',
  paddingHorizontal:20,
  justifyContent:'center'
},
textStyle: {
  fontSize: 15, fontFamily: 'RobotoCondensed-Bold',
  paddingLeft:5,
  color:'#dae0e4'
},
input:{
  height: 40,
  width: '100%',
  marginBottom: 20,
  borderRadius: 10, 
  backgroundColor: '#798bb3',
  padding: 10,
  fontSize: 15
},

});