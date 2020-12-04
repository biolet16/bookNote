import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import firebase from '@react-native-firebase/app';
import  {  GoogleSignin, GoogleSigninButton, statusCodes }  from '@react-native-community/google-signin';

GoogleSignin.configure({
  webClientId: '',
});

class LoginPage extends React.Component {
    state = { email: '', password: '', errorMessage: null };
    //로그인 메소드
    handleLogin = () => {
        const { email, pasword } = this.state
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('CalenderPage'))
          .catch(error => this.setState({ errorMessage: error.message }))
    }
    //google 로그인
    async onGoogleButtonPress() {
      // users ID token 가져오기
      const { idToken } = await GoogleSignin.signIn();
      // 토큰으로 로그인 자격증명생성
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // 인증 정보로 로그인
      return auth().signInWithCredential(googleCredential);
    }

    render(){
        return (
           <View style={styles.container}>
                <Text>Login</Text>
                    {this.state.errorMessage &&
                      <Text style={
                        { color: 'red' }
                        }>
                        {this.state.errorMessage}
                      </Text>}
                    <TextInput
                      style={styles.textInput}
                      autoCapitalize="none"
                      placeholder="Email"
                      onChangeText={email => this.setState({ email })}
                      value={this.state.email}
                />
                <TextInput
                      secureTextEntry
                      style={styles.textInput}
                      autoCapitalize="none"
                      placeholder="Password"
                      onChangeText={password => this.setState({ password })}
                      value={this.state.password}
                />
                <Button title="Login" onPress={this.handleLogin} />
                 <Button
                      title="구글로그인-아직안함"
                      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
                  />
                 <Button
                    onPress={() => this.props.navigation.navigate('SignUpPage')}
                    title="회원가입"
                    color="#C0C0C0"
                 />
                 <View>
                     <Text>Login</Text>
                 </View>
           </View>
        );
  }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default (inject('bookNoteStore')(observer(LoginPage)));