import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./index.css";
import "./index.scss";
import { ContextProvider } from "./Context";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Amplify, { Auth } from "aws-amplify";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7kQoX5Lo4Qxe0KS4ZK_ZqYMJKtz0IrVg",
  authDomain: "j-collection.firebaseapp.com",
  databaseURL: "https://j-collection-default-rtdb.firebaseio.com",
  projectId: "j-collection",
  storageBucket: "j-collection.appspot.com",
  messagingSenderId: "35357744009",
  appId: "1:35357744009:web:fc01e5560a16a936b35f58",
  measurementId: "G-2ZXZ0QBYV1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
