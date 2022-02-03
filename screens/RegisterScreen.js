import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Input } from 'react-native-elements/dist/input/Input';

const RegisterScreen = ({ navigation }) => {
    const [name, setName] = useState("");


  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Text h3 style={{marginBottom: 50}}>Create a Signal Account.</Text>
      <View style={styles.inputContainer}>
        <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={ () => setName(text)} />
        <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={ () => setName(text)} />
        <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={ () => setName(text)} />
        <Input placeholder='Full Name' autoFocus type='text' value={name} onChangeText={ () => setName(text)} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {},
    inputContainer: {}
});
