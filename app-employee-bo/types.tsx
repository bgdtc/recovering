/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  Login: undefined;
  Dashboard: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export type AuthData = {
  id: string;
  email: string;
  employee: string;
  token: string;
  tokens: string;
  firstName: string;
  lastName: string;
  status: string;
  permissions: any[]
};

export interface decodedToken {
  email:string;
  employee:string;
  exp:number;
  iat:number;
  id:string;
  permissions: any[];
  scope: string;
  status: string;
  tenant: string;
  tokens:string;
  token:string;
  firstName: string;
  lastName: string;
}


