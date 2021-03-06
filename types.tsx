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
  Profile:undefined,
  Product:undefined,
  Map:undefined,
  Compare:undefined;
  BonsPlans:undefined;
  Scan:undefined;
  Comment:undefined;
};

export type product={
  id:number,
  name:string,
  prix:number,
  img:string,
  nutriscore:number,
  apport:any,
  composition:any,
  similaires:number[],
  regime:string
}

export type comment={
  id:number,
  productId:number,
  author:string,
  content:string,
}

export type salesproduct={
  id:number,
  name:string,
  prix:number,
  img:string,
  nutriscore:number,
  apport:any,
  composition:any,
  similaires:number[],
  regime:string,
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Product:undefined;
  Map:undefined;
  Compare:undefined;
  BonsPlans:undefined;
  Scan:undefined;
  Comment:undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
