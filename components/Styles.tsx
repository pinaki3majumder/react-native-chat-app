import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    // PersonalInfo Component

    personalInfoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
    },
    LoginBtn: {
        // backgroundColor: '#60a5ff',
        backgroundColor: '#2196f3',
        borderRadius: 5,
        padding: 15
    },
    LoginBtnText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
    },
    nameTextInput: {
        borderColor: '#aaa',
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        fontSize: 18,
        backgroundColor: 'white'
    },
    logoImage: {
        height: 120,
        width: 120,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 0
    },
    enterYourName: {
        alignSelf: "center",
        width: '100%',
        padding: 20
    },
    nameText: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20
    },
    welcome: {
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 100,
        fontSize: 18,
        fontWeight: '600',
    },
    bg: {
        flex: 1,
        justifyContent: 'center',
    },

    // imagechooser component

    avatarBig: {
        height: 100,
        width: 100,
        borderRadius: 20,
        marginTop: 15,
        alignSelf: "center",
    },
    selectButton: {
        backgroundColor: 'blue', // Customize the button's appearance
        padding: 10,
        borderRadius: 5,
    },
    selectButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    uploadImgBtn: {
        backgroundColor: '#d9e7cb',
        padding: 10,
        borderRadius: 5,
    },
    uploadImgBtnTxt: {
        textAlign: 'center',
    },
    uploadImgContainer: {
        marginBottom: 20
    },

    // Chat Component

    sendSection: {
        flexDirection: "row",
        backgroundColor: '#dce8ff',
        padding: 15
    },
    chatInfoContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'white',
    },
    chatTextInput: {
        marginRight: 5,
        borderColor: "rgba(52, 52, 52, 0.8)",
        borderWidth: 1,
        borderRadius: 4,
        flexGrow: 1,
        fontSize: 18,
        backgroundColor: 'white',
        padding: 5,
    },
    chatBtn: {
        padding: 8,
        borderRadius: 4,
        backgroundColor: '#2196f3',
    },
    chatBtnText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15,

    },

    // ChatItem component

    chatItemHeader: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    flatListItem: {
        borderRadius: 10,
        borderWidth: 2,
        padding: 5,
        paddingBottom: 7,
        marginBottom: 10,
        marginLeft: 16,
        marginRight: 16,
    },
    avatarSmall: {
        width: 30,
        height: 30,
        borderRadius: 5,
        marginRight: 5,
        marginBottom: 2,
    },
    chatText: {
        fontSize: 18,
        fontWeight: '500'
    },
    smallItalicText: {
        fontSize: 16,
        fontStyle: "italic",
        alignSelf: "center",
    },
});