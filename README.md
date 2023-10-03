# EXPO CHAT APP
EXPO CHAT APP is a real-time chat application that allows two people to chat simultaneously. It includes both the frontend, built with React Native and Expo, and the backend, implemented with Node.js and Socket.IO.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Frontend Dependencies](#frontend-dependencies)
- [Backend Dependencies](#backend-dependencies)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Getting Started

To run the `EXPO CHAT APP`, follow the instructions below:

### Prerequisites

Before you begin, ensure you have the following software installed on your machine:

- Node.js (https://nodejs.org/)
- Expo CLI (https://docs.expo.dev/get-started/installation/)
- VS COde (https://code.visualstudio.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/expo-chat-app.git
   cd expo-chat-app
2. Run the backend server:
   ```bash
   cd server
   npm install
   npm start
3. `The backend will be available at http://localhost:3000/.`

4. Run the frontend:
   ```bash
   cd ..
   npm install
   expo start --web
5. `The frontend will be available at http://localhost:19006/.`

## Frontend Dependencies
The frontend of EXPO CHAT APP depends on the following packages:
- @react-native-async-storage/async-storage
- expo
- expo-image-manipulator
- expo-image-picker
- expo-splash-screen
- expo-status-bar
- react
- react-dom
- react-native
- react-native-web
- socket.io-client
- typescript

You can install these dependencies by running `npm install`.

## Backend Dependencies
The backend of EXPO CHAT APP depends on the following packages:

- @types/cors
- @types/express
- cors
- express
- http
- socket.io
- ts-node
- typescript

You can install these dependencies by running `npm install` in the `server` directory.

## Usage
1. Create an account.
2. Start chatting with another user in real-time.
3. Enjoy a seamless chat experience with `EXPO CHAT APP`!


## Roadmap
- [x] App created
- [x] Backend created
- [x] Prepare readmd file
- [ ] Add validation
- [ ] Frontend Unit test with coverage report
- [ ] Backend Unit test with coverage report


## Contributing
We welcome contributions from the community! If you'd like to contribute to [Project Name], please follow these steps:
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m "Add your commit message here"`
4. Push your changes to your forked repository: `git push origin feature/your-feature-name`
5. Open a pull request on the main repository.
6. We'll review your contribution and merge it if it meets the project's guidelines and standards.


## License
[MIT](https://choosealicense.com/licenses/mit/)


## Support
I hope that you will find `EXPO CHAT APP` project useful and enjoy using it! Thank you for your interest and contributions.
