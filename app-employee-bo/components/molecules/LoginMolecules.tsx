import { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "../../constants/Styles";
import { Buttons, Images } from "../atoms";

export const LoginHeader = () => (
    <>
        <Images.HeaderImage />
        <View style={styles.separator} />
    </>
);

export const LoginForm = ({signIn}:any) => {
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.loginForm}>
            <View style={styles.backgroundPrimary}>
                <TextInput style={styles.loginInput} keyboardType='email-address' value={username} placeholder="email@mail.com" onChangeText={username => setUsername(username)}/>
                <TextInput style={styles.loginInput} secureTextEntry={true} value={password} placeholder="*********" onChangeText={password => setPassword(password)} />
                <Buttons.SubmitButton title="Connexion" onPress={() => signIn({ username, password })} />
            </View>
            <Text style={styles.subtitle}>Mot de passe oublié ?</Text>
        </View>
    )
};