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
import Socket from "./WebSocket";

type ChatProps = {
    userName: string,
    avatarImg: string
}

const Chat = ({ userName, avatarImg }: ChatProps) => {
    let [chatInput, setChatInput] = useState("");
    let [chatItemList, setChatItemList] = useState<ChatItem[]>([]);

    useEffect(() => {
        (async () => {
            try {
                if (Socket.state == "Disconnected") {
                    await Socket.start();
                }
            } catch (err) {
                console.log(err);
            }
        })();
        Socket.on("ReceiveMessage", (chatItem) => {
            setChatItemList((chatItemList) => {
                if (chatItemList.find((i) => i.id == chatItem.id)) return chatItemList;
                return [...chatItemList, chatItem];
            });
        });
    }, []);

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
                    onPress={() => {
                        async () => {
                            await Socket.invoke("SendMessage", {
                                id: Math.random().toString(36).substring(7),
                                text: chatInput,
                                by: userName,
                                image: avatarImg,
                                timeStamp: Date.now(),
                            });
                            setChatInput("");
                        }
                    }}>
                    <Text style={Styles.chatBtnText}>Send</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Chat;