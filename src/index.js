import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/fonts.css";
import App from "./App";

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import theme from "./mui/theme";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHCMS_URI,
    // process is customized for rca
  }),
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
