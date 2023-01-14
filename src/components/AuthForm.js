import { Input, Text, Button } from '@rneui/themed';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';

export const AuthForm = ({headerText, errorMessage, submitButtonText, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer><Text h3>{headerText}</Text></Spacer>
            <Input label="Email" value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false}/>
            <Input label="Password" value={password} onChangeText={setPassword} autoCapitalize='none' autoCorrect={false} secureTextEntry/>
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Spacer><Button title={submitButtonText} onPress={() => onSubmit({email, password})}/></Spacer>
        </>
    );
}

const styles = StyleSheet.create({
    errorMessage: {
        color: 'red',
        fontSize: 18,
        marginLeft: 15,
        marginTop: 15
    }
});