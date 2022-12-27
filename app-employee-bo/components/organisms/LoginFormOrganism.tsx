import { useMutation } from '@apollo/client';
import { useAuth } from '../../contexts/Auth';
import { LOGIN } from '../../queries';
import { Alert } from 'react-native';
import { Loading } from '../atoms';
import { LoginMolecules} from '../molecules/';

export const LoginFormOrganism = () => {
    const auth = useAuth();
    const [login, {loading,error}] = useMutation(LOGIN);
    const validateCredentials = (username:string,password:string) => {
        if(username === '' || password === '') return false;
        return true;            
    }

    const signIn = async ({ username, password }: { username: string; password: string; }) => {
        if (!validateCredentials(username,password)) { return Alert.alert("Merci de renseigner les champs requis") };
        try {
            const {data} = await login({variables:{data:{username: username, password: password}}});
            if (data !== undefined) await auth.signIn(data?.createAuthToken?.token);  
        } catch (e) {
            console.error(e);
            Alert.alert('Identifiants Incorrects');
        } 
    }
    if (loading) return <Loading.Loading />;
        
    return (<LoginMolecules.LoginForm signIn={signIn} />);
}