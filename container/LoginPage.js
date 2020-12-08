import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import  {  GoogleSignin, GoogleSigninButton, statusCodes }  from '@react-native-community/google-signin';

class LoginPage extends React.Component {
    componentDidMount() {
        GoogleSignin.configure({
          webClientId: 'AIzaSyBqWERw_WhOkm3YWMSrFGLAHCBZKhqh9JE',
          offlineAccess: true,
          hostedDomain: '',
          forceConsentPrompt: true,
        });
      }
    state = {
    email: '',
    password: '',
    errorMessage: null
    };

    //로그인 메소드
    handleLogin = () => {
        const { email, password } = this.props.bookNoteStore;
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => this.props.navigation.navigate('CalenderPage'))
          .catch(error => this.setState({ errorMessage: error.message }));
    }
    //이메일 store에 세팅
    setEmail(email){
        this.props.bookNoteStore.changeEmail(email);
    }
    //패스워드 store에 세팅
    setPw(password){
        this.props.bookNoteStore.changePassword(password);
    }
    //구글 로그인
    _signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo });
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };

    render(){
        const {email, password} = this.props.bookNoteStore;
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
                      onChangeText={email => this.setEmail(email)}
                      value={email}
                />
                <TextInput
                      secureTextEntry
                      style={styles.textInput}
                      autoCapitalize="none"
                      placeholder="Password"
                      onChangeText={password => this.setPw(password)}
                      value={password}
                />
                <Button title="Login" onPress={this.handleLogin} />

                 <Button
                    onPress={() => this.props.navigation.navigate('SignUpPage')}
                    title="회원가입"
                    color="#C0C0C0"
                 />

                 <GoogleSigninButton
                     style={{ width: 192, height: 48 }}
                     size={GoogleSigninButton.Size.Wide}
                     color={GoogleSigninButton.Color.Dark}
                     onPress={this._signIn}
                     disabled={this.state.isSigninInProgress} />
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