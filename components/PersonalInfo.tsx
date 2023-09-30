import React, { useState } from "react";
import { Image, ImageBackground, Pressable, Text, TextInput, View } from "react-native";
import Styles from './Styles';
import ImageChooser from "./ImageChooser";

type PersonalInfoProps = {
    onClosed: (userName: string, avatarImg: string) => void
};

const PersonalInfo = ({onClosed}: PersonalInfoProps) => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    return (
        <View style={Styles.personalInfoContainer}>
            <ImageBackground source={require("../assets/login-bg.png")} resizeMode="repeat" style={Styles.bg}>
                <Image
                    style={Styles.logoImage}
                    source={require("../assets/chat-expo-app-icon.png")} />
                <Text style={Styles.welcome}>Welcome to ChatExpo</Text>
                <View style={Styles.enterYourName}>
                    <Text style={Styles.nameText}>Please enter your name</Text>
                    <TextInput
                        style={Styles.nameTextInput}
                        onChangeText={(val) => {
                            setName(val)
                        }}
                        value={name}
                    />
                    <ImageChooser onChangeImage={(image) => setImage(image)} />
                    <Pressable onPress={() => { onClosed(name, image) }}
                        style={() => [
                            Styles.LoginBtn
                        ]}>
                        <Text style={Styles.LoginBtnText}>Start Chatting...</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}

export default PersonalInfo;