import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";
import { Authenticator } from '@aws-amplify/ui-react';
Amplify.configure(outputs);
import '@aws-amplify/ui-react/styles.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
    
  <React.StrictMode>
    <Authenticator
      socialProviders={['google']}
    >
      <App />
    </Authenticator>
  </React.StrictMode>
);
