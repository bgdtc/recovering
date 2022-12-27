import { AppRegistry, Platform } from 'react-native';
import { ApolloClient, InMemoryCache, ApolloProvider,createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { API_URL } from '@env';
import { Router } from './routes/Router';
import { AuthProvider } from './contexts/Auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';

const httpLink = createHttpLink({uri: API_URL});

const authLink = setContext(async(_, { headers }) => {
  
  const authData = await AsyncStorage.getItem('@AuthData');
  const token = JSON.parse(authData!);

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token?.token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  name:'react-api-employee-auth-client',
  version: '1.3',
  defaultOptions:{
    watchQuery:{
      fetchPolicy:'cache-and-network'
    }
  }
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      {/*@ts-ignore */}
      <AuthProvider>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
          <Router />
      </AuthProvider>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent('app-employee-bo', () => App);
