import React, { useEffect, useState } from "react";
import { View, Image, Text, Dimensions, TextInput,StyleSheet, Alert, ScrollView } from "react-native";
import LottieView from 'lottie-react-native';
import { processFontFamily } from "expo-font";
import { Button} from "react-native-elements";

import ViewWithLoading from "../components/ViewWithLoading";
import * as yup from 'yup';
import {Formik} from "formik";



export default function TabOneScreen() {
  const [fname,setFname] = useState<string>("");
  const [lname,setLname] = useState<string>("");
  //const [email,setEmailText] = useState<string>("");
  //const [password,setPassword] = useState<string>("");
  //const [cpassword,setCPassword] = useState<string>("");
  const [loading,setLoading] = useState(true);


  const handleAlertMessage = () => {

    Alert.alert("Message", "Register Successfully");
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);

    }, 3000);
  }, [])

  const registerSchema = yup.object({
    email: yup.string().required('Email is Required').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, 'Invalid Email'),
    password: yup.string().required('Password is Required')

    
  })

  return (
    <ScrollView 
    contentContainerStyle={{flexGrow:1}}
    scrollEnabled={false}
    >
   <ViewWithLoading  loading = {loading}>
      <Formik
      initialValues={{
          email: '',
          password: ''
      }}  
      onSubmit={(values, action) =>{
        console.log(values);
      }}
      validationSchema ={registerSchema}
      >
          {({   handleChange, values, errors, touched, handleSubmit}) => ( 
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
          />
      
     
       <Text style={style.textStyle}>
              Email
              </Text>
           <TextInput
           
          style={style.input}
        onChangeText={handleChange('email')}
          value={values.email}
          keyboardType={"email-address"}
          placeholder ={"YOUR EMAIL ADDRESS"}
          autoCapitalize={"none"}
          error = {errors.email !== undefined}            
          />
         {errors.email && 
            <Text style={{paddingBottom:10,color: 'red'}}>
              {errors.email}
            </Text>
        }
        
          <Text style={style.textStyle}>
              Password
              </Text>
              <TextInput
          style={style.input}
        onChangeText={handleChange('password')}
          value={values.password}
          placeholder ={"YOUR PASSWORD"}
          secureTextEntry={true}
          error = {errors.password !== undefined}            
          />
         {errors.password && 
            <Text style={{paddingBottom:40,color: 'red'}}>
              {errors.password}
            </Text>
        }

      

         
        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
           < Button
           
            title={"SUBMIT"}
            type={"solid"}
            onPress={handleAlertMessage}
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
              borderRadius: 10, marginBottom:40
            }}
            
           />
        
        
         
           
           
          </View>
        </View>
      </View>
          ) }   
      </Formik>
   </ViewWithLoading>
   </ScrollView>
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