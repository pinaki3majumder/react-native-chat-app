import React, { useState, useEffect } from "react";
import { Image, View, Platform, Text, Alert, Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import Styles from "./Styles";
import { Button } from "react-native";

type ImageChooserProps = {
    onChangeImage: (image: string) => void;
};

const ImageChooser = (props: ImageChooserProps) => {
    const [avatarImg, setImage] = useState("");

    useEffect(() => {
        (async () => {
            if (Platform.OS !== "web") {
                const {
                    status,
                } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== "granted") {
                    alert("Sorry, we need camera roll permissions to make this work!");
                }
            }
        })();
    }, []);

    const pickImage = () => {
        Alert.alert(
            'Pick an image',
            'Choose the source of your image',
            [
                {
                    text: 'Open Camera',
                    onPress: async () => {
                        const { status } = await ImagePicker.requestCameraPermissionsAsync();
                        if (status !== 'granted') {
                            alert('Permission to access the camera is required!');
                            return;
                        }

                        let result = await ImagePicker.launchCameraAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            allowsEditing: true,
                            aspect: [1, 1],
                            quality: 1,
                        });

                        if (!result.canceled) {
                            resizeImg(result);
                        }
                    },
                },
                {
                    text: 'Choose from Library',
                    onPress: async () => {
                        let result = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            allowsEditing: true,
                            aspect: [1, 1],
                            quality: 1,
                        });

                        if (!result.canceled) {
                            resizeImg(result);
                        }
                    },
                }
            ],
            { cancelable: false }
        );
    };

    const resizeImg = async (res: { canceled?: false; assets: any; uri?: any; }) => {
        const resizedImage = await ImageManipulator.manipulateAsync(
            res.assets[0].uri,
            [{ resize: { width: 50, height: 50 } }],
            { base64: true }
        );
        let imageBase64 = resizedImage.base64 ?? "";
        setImage(res.assets[0].uri);
        props.onChangeImage(imageBase64);
    }

    const uploadImageFile = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
        });

        if (!result.canceled) {
            resizeImg(result);
        }
    };

    return (
        <View style={Styles.uploadImgContainer}>
            {Platform.OS !== 'web' ? (
                // Content to display when the platform is not "web"
                <Pressable style={Styles.uploadImgBtn} onPress={pickImage} >
                    <Text style={Styles.uploadImgBtnTxt}>Pick an image</Text>
                </Pressable>
            ) : (
                // Content to display when the platform is "web" 
                <Pressable style={Styles.uploadImgBtn} onPress={uploadImageFile} >
                    <Text style={Styles.uploadImgBtnTxt}>Pick an image</Text>
                </Pressable>
            )}
            {avatarImg ? (
                <Image
                    resizeMode="cover"
                    source={{ uri: avatarImg }}
                    style={Styles.avatarBig}
                />
            ) : (
                <Text style={{ alignSelf: "center" }}>No image selected</Text>
            )}
        </View>
    );
};

export default ImageChooser;
