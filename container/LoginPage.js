import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { StyleSheet, Text, TextInput, View, Image, Button } from 'react-native';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import  {  GoogleSignin, GoogleSigninButton, statusCodes }  from '@react-native-community/google-signin';

class LoginPage extends React.Component {
    componentDidMount() {
        GoogleSignin.configure({
          webClientId: '447851910801-24h87q3fnf376a7dm2nqp2dkvbkgih7f.apps.googleusercontent.com',
          offlineAccess: true,
          hostedDomain: '',
          forceConsentPrompt: true,
        });
    }

    state = {
        email: '',
        password: '',
        token: null,
        errorMessage: null,
    };

    //구글로그인
    async onGoogleButtonPress() {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }

    //로그인 메소드
    handleLogin = () => {
        const { email, password } = this.props.bookNoteStore;
        //이메일 비번 체크
        if(email == null || email == ''){
            this.setState({ errorMessage: '이메일을 입력해주세요' })
            return false;
        }
        if(password == null || password == ''){
            this.setState({ errorMessage: '비밀번호를 입력해주세요' })
            return false;
        }
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            this.setUserToken();
            this.props.navigation.navigate('HomeBottomTab');
            })
          .catch(error => this.setState({ errorMessage: error.message }));
    }
    setUserToken(){
        this.props.bookNoteStore.changeUserToken('success');
    }
    //이메일 store에 세팅
    setEmail(email){
        this.props.bookNoteStore.changeEmail(email);
    }
    //패스워드 store에 세팅
    setPw(password){
        this.props.bookNoteStore.changePassword(password);
    }

    render(){
        const {email, password} = this.props.bookNoteStore;
        return (
           <View style={styles.container}>

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
                <View style={styles.button}>
                    <Button title="Login"
                        color="#000000"
                        width="80%"
                        onPress={this.handleLogin} />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('SignUpPage')}
                        title="회원가입"
                        color="#C0C0C0"
                     />
                </View>

                 <GoogleSigninButton
                     style={{ width: 192, height: 48 }}
                     size={GoogleSigninButton.Size.Wide}
                     color={GoogleSigninButton.Color.Dark}
                     onPress={() => this.onGoogleButtonPress().then(() => this.props.navigation.navigate('CalenderPage'))}
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
    button: {
        width: '80%',
        margin : 5,
    },
    textInput: {
        width: '80%',
        height: 50,
        margin : 5,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})

export default (inject('bookNoteStore')(observer(LoginPage)));