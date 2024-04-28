import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const AuthCheck = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AuthCheck />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);