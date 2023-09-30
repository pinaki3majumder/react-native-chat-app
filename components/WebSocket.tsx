import * as signalR from "@microsoft/signalr";

const hubUrl = "https://your-server-domain.com/signalr/hubName"; // Replace with your actual URL

const connection = new signalR.HubConnectionBuilder()
    .withUrl(hubUrl)
    .withAutomaticReconnect()
    .configureLogging(signalR.LogLevel.Information)
    .build();

export default connection;
