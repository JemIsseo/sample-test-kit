import React from "react";
import { View, Image, Text, Dimensions, TextInput } from "react-native";
import LottieView from 'lottie-react-native';


export default function TabOneScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#05435b',
        justifyContent: 'center',
        paddingHorizontal: 20
      }}
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
        flex: 1,
      }}>
        <View style={{
          flex: 0
        }}>
          
          <View style={{
            height: 40,
            width: '100%',
            marginBottom: 20,
           
            borderRadius: 20, backgroundColor: '#798bb3'
          }}>
             <TextInput
  placeholder="EMAIL OR USERNAME" style={{
    flex:1,paddingTop: 2,
    paddingLeft: 15,
    fontSize: 15}}
  />
        
          </View>
        </View>

        <View style={{
          flex: 0,
          marginBottom: 20
        }}>
         
         <View style={{
            height: 40,
            width: '100%',
            borderRadius: 20, backgroundColor: '#798bb3'
            
          }}>
<TextInput
  placeholder="PASSWORD" style={{
    flex:1,paddingTop: 2,
    paddingLeft: 15,
    fontSize: 15}}
  />
          </View>
        </View>

        <View style={{
          flex: 0,
        }}>

          <View style={{
            flex: 0
          }}>
            <View style={{
              height: 45,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
              backgroundColor: '#5f62ed'
              
            }}>
              <Text style={{
                fontSize: 18,
                color: '#fff'
              }}>
                LOGIN
              </Text>
            </View>
          </View>
        </View>

      </View>
      <View style={{
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35,
        borderRadius: 10,
        paddingBottom: 20
      }}>
        <Text style={{
          fontSize: 18,color:'#dae0e4'
        }}>
          Create an account? { }
          <Text style={{
            color:'#ed5f62'
          }}>Sign up now</Text>
        </Text>
        <Text style={{
          fontSize: 18,color:'#dae0e4'
        }}>
          Forgot your password? { }
          <Text style={{
            color:'#ed5f62'
          }}>Reset Password</Text>
        </Text>
      </View>
    </View>
  );
}