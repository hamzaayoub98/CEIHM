/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ProductScreen from "../screens/ProductScreen";
import ProfilePage from "../screens/ProfilePage";
import MapScreen from "../screens/MapScreen";
import ComparaisonScreen from "../screens/ComparaisonScreen";
import BonsPlans from "../screens/BonsPlans";
import ScanScreen from "../screens/ScanScreen";
import CommentPage from "../screens/CommentPage";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Profile" component={ProfilePage}/>
      <Stack.Screen name="Map" component={MapScreen}/>
      <Stack.Screen name="Compare" component={ComparaisonScreen}/>
      <Stack.Screen name="BonsPlans" component={BonsPlans}/>
      <Stack.Screen name="Scan" component={ScanScreen}/>
      <Stack.Screen name="Comment" component={CommentPage}/>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Rechercher',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
      name="Map"
      component={MapScreen}
      options={{
          title:'Map',
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
      }}
      />
      <BottomTab.Screen
          name="Compare"
          component={ComparaisonScreen}
          options={{
              title:'Compare',
              tabBarIcon: ({ color }) => <TabBarIcon name="random" color={color} />,
          }}/>
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
