import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reducer from "./redux/reducer"
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from "@material-ui/core/styles";


const store = createStore(reducer, applyMiddleware(thunk, logger));

const theme = createMuiTheme({
  spacing: 10,
  palette: {
    primary: {
      main: "#643865"
    },
  },
});

ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

