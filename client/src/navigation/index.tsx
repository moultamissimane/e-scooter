// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer, useNavigation } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Platform, StatusBar, Text, View } from "react-native";
// import SplashScreen from "../pages/other/splash";
// import { TabBarIcon, MapButton } from "../components/index";
// import { Ionicons } from "@expo/vector-icons";
// import { useState, useEffect, useRef } from "react";
// import AuthScreen from "../pages/auth";
// import LangueScreen from "../pages/home/Langue";
// import Auth from "@/pages/home/Auth";
// import CreateAccount from "@/pages/home/CreateAccount";
// import Verification from "@/pages/home/Verification";
// import Home from "@/pages/home/Home";
// import Login from "@/pages/home/Login";
// import Commande from "@/pages/home/Commande";
// import CommandeMap from "@/pages/home/CommandeMap";
// import Profile from "@/pages/home/Profile";
// import CommandeHistory from "@/pages/home/CommandeHistory";
// import MyInfo from "@/pages/home/MyInfo";
// import FAQ from "@/pages/home/FAQ";
// import Promo from "@/pages/home/Promo";
// import FoodViewer from "@/pages/home/FoodViewer";
// import Listing from "@/pages/home/Listing";
// import Livreur from "@/pages/home/Livreur";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { getData } from "../graphql/fetcher";
// import { useDispatch, useSelector } from "react-redux";
// import { isLogin } from "../store/User";
// import { COLORS } from "../constants/theme";
// import tw from "twrnc";
// import Spinner from "react-native-loading-spinner-overlay";
// import Constants from "expo-constants";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import Panier from "@/pages/home/Panier";
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';


// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: true,
//     shouldSetBadge: true,
//     priority: Notifications.AndroidNotificationPriority.HIGH,
    
//   }),
  
//   handleSuccess: async (identifier) => {
//     console.log('success', identifier)
//   },
// });


// const apiUrl = Constants?.manifest?.extra?.apiUrl;

// type Pages = 'Root' | 'Login' | 'Promo' | 'FAQ' | 'Verification' | 'Commande' | 'CommandeMap' | 'MyInfo' | 'CommandeHistory' | 'Listing' | 'FoodViewer' | 'Livreur' | 'Profile' | 'Home' | 'CreateAccount' | 'Auth' | 'Panier';
// export interface Navigate {
//   navigate: (page: Pages) => void,
//   goBack: () => void
// }

// const client = new ApolloClient({
//   uri: apiUrl,
//   cache: new InMemoryCache(),
// });

// const Stack = createNativeStackNavigator();
// const BottomTab = createBottomTabNavigator();

// const GroupHome = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Feed"
//         component={Home}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

// function RootNavigator() {
//   const state = useSelector((state: any) => state?.user?.isAuth);
//   const dispatch = useDispatch();
//   const [isLoadingComplete, setLoadingComplete] = useState(true);
//   const [HasLanguage, setHasLanguage] = useState(false);



//   const getToken = async () => {
//     const value = await getData("user");

//     if (value?.token) {
//       dispatch(isLogin(true));
//       setLoadingComplete(false);
//     } else {
//       dispatch(isLogin(false));
//       setLoadingComplete(false);
//     }
//   };
//   useEffect(() => {
//     getToken();
//     useLanguage();
//   }, [state]);

//   const useLanguage = async () => {
//     const Langue = await AsyncStorage.getItem("@language");
//     if (Langue) {
//       setHasLanguage(true);
//     }
//   };

//   if (isLoadingComplete) {
//     return (
//       <View style={tw`flex-1 bg-[#526FFF}]`}>
//         <StatusBar backgroundColor="#fff" barStyle="dark-content" />
//         <Spinner
//           //visibility of Overlay Loading Spinner
//           visible={isLoadingComplete}
//           //Text with the Spinner
//           textContent={"Loading..."}
//           //Text style of the Spinner Text
//           textStyle={tw`text-white `}
//         />
//       </View>
//     );
//   }

//   return (
//     <Stack.Navigator>
//       <>
//         {!state ? (
//           <Stack.Group>
//             {HasLanguage && (
//               <Stack.Screen
//                 options={{
//                   headerShown: false,
//                 }}
//                 name="Root"
//                 component={LangueScreen}
//               />
//             )}
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Login"
//               component={Login}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Auth"
//               component={Auth}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="CreateAccount"
//               component={CreateAccount}
//             />
//           </Stack.Group>
//         ) : (
//           <Stack.Group>
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Home"
//               component={Home}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Profile"
//               component={Profile}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Livreur"
//               component={Livreur}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="FoodViewer"
//               component={FoodViewer}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Panier"
//               component={Panier}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Listing"
//               component={Listing}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="CommandeHistory"
//               component={CommandeHistory}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="MyInfo"
//               component={MyInfo}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="CommandeMap"
//               component={CommandeMap}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Commande"
//               component={Commande}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Verification"
//               component={Verification}
//             />

//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="FAQ"
//               component={FAQ}
//             />
//             <Stack.Screen
//               options={{
//                 headerShown: false,
//               }}
//               name="Promo"
//               component={Promo}
//             />
//           </Stack.Group>
//         )}
//       </>
//     </Stack.Navigator>
//   );
// }

// export default function Navigation() {
//   // const queryClient = new QueryClient();

//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification]: any = useState(false);
//   const notificationListener: any = useRef();
//   const responseListener: any = useRef();

//   useEffect(() => {
//     // registerForPushNotificationsAsync().then((token: any) => setExpoPushToken(token));

//     notificationListener.current = Notifications.addNotificationReceivedListener((notification: any) => {
//       // make custom notification
//       const customNotification = {
//         title: notification?.request?.content?.title,
//         body: 'Commande bien reçu ❤',
//         data: notification?.request?.content?.data,
//       };
//       setNotification(customNotification);
      
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);



//   return (
//     <ApolloProvider client={client}>
//       <NavigationContainer>
//         <RootNavigator />
//       </NavigationContainer>
//     </ApolloProvider>
//   );
// }
