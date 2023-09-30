import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import PersonalInfo from './components/PersonalInfo';
import Styles from './components/Styles';
import Chat from "./components/Chat";
import AsyncStorage from "@react-native-async-storage/async-storage";
import  * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const storageUserNameKey = "chatapp-username";
  const storageImageKey = "chatapp-image";

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchPersonalData = async () => {
    let fetchedUsername = await AsyncStorage.getItem(storageUserNameKey);    
    let userName = fetchedUsername == null ? "" : fetchedUsername;
    let fetchedImage = await AsyncStorage.getItem(storageImageKey);
    let image = fetchedImage == null ? "" : fetchedImage;
    setName(userName);
    setImage(image);
  };

  const onSubmitPersonalInfo = async (name: string, image: string) => {
    setName(name);
    await AsyncStorage.setItem(storageUserNameKey, name);
    setImage(image);
    await AsyncStorage.setItem(storageImageKey, image);
  }

  if (isLoading) {
    // Prevent auto-hiding of the splash screen
    SplashScreen.preventAutoHideAsync();

    // Start your data fetching process
    fetchPersonalData()
      .then(() => {
        // Once data fetching is complete, hide the splash screen
        SplashScreen.hideAsync();
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.warn(error);
      });

    // Return null during loading
    return null;
  }

  let activeComponent = name !== "" ? (
    <Chat userName={name} avatarImg={image} />
  ) : (
    <PersonalInfo onClosed={onSubmitPersonalInfo} />
  )

  return (
    <SafeAreaView style={Styles.container}>
      {activeComponent}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

