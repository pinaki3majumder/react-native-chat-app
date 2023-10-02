import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Styles from './Styles';
import { RenderChatItem, ChatItem } from "./ChatItem";
import {
    FlatList,
    TextInput,
    Pressable,
    ListRenderItem,
} from "react-native";
import SocketIOClient from 'socket.io-client';

type ChatProps = {
    userName: string,
    avatarImg: string
}

const socket = SocketIOClient('http://localhost:3000');

const Chat = ({ userName, avatarImg }: ChatProps) => {
    let [chatInput, setChatInput] = useState("");
    let [chatItemList, setChatItemList] = useState<ChatItem[]>([]);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

        socket.on('chat message', (chatItem) => {
            setChatItemList((chatItemList) => {
                if (chatItemList.find((i) => i.id == chatItem.id)) return chatItemList;
                return [...chatItemList, chatItem];
            });
        });

        return () => {
            socket.disconnect(); // Disconnect when the component unmounts
        };
    }, []);

    const sendMessage = () => {
        if (chatInput) {
            const chatData = {
                id: Math.random().toString(36).substring(7),
                text: chatInput,
                by: userName,
                image: avatarImg,
                timeStamp: Date.now(),
            };
            socket.emit('chat message', chatData); // Send the message to the server
            setChatInput(''); // Clear the message input field
        }
    };

    const renderItem: ListRenderItem<ChatItem> = ({ item }) => (
        <RenderChatItem chatItem={item} username={userName}></RenderChatItem>
    );

    return (
        <View style={Styles.chatInfoContainer}>
            <FlatList
                inverted
                data={chatItemList.sort((a, b) => b.timeStamp - a.timeStamp)}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            ></FlatList>

            <View style={Styles.sendSection}>
                <TextInput
                    style={Styles.chatTextInput}
                    value={chatInput}
                    onChangeText={(text) => setChatInput(text)}
                ></TextInput>

                <Pressable
                    style={Styles.chatBtn}
                    onPress={sendMessage}
                >
                    <Text style={Styles.chatBtnText}>Send</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Chat;