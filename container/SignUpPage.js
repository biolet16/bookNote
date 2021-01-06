import React from 'react';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class SignUp extends React.Component{
    state = { email: '', password: '', errorMessage: null } //나중에 store에 다넣기
    handleSignUp = () => {
    //이메일 비번 체크
      if(this.state.email == null || this.state.email == ''){
          this.setState({ errorMessage: '이메일을 입력해주세요' })
          return false;
      }
      if(this.state.password == null || this.state.password == ''){
          this.setState({ errorMessage: '비밀번호를 입력해주세요' })
          return false;
      }
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('CalenderPage'))
        .catch(error => this.setState({ errorMessage: error.message }))
    }
    render() {
        return (
          <View style={styles.container}>
            <Text>Sign Up</Text>
            {this.state.errorMessage &&
              <Text style={
                { color: 'red' }
                }>
                {this.state.errorMessage}
              </Text>}
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <View style={styles.button}>
                <Button title="Sign Up" onPress={this.handleSignUp} color="#000000"/>
            </View>
            <View style={styles.button}>
                <Button
                  title="이미 아이디가 있나요? 로그인"
                  color="#C0C0C0"
                  onPress={() => this.props.navigation.navigate('LoginPage')}
                />
            </View>
          </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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