import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ResponsiveDrawer from './components';
import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  palette: {
    primary: {
      main:'#fcf7f5'
    },
    secondary:{
      main:'#fe9a75'
    },
    tertiary:{
      main:'#583c37'
    },
    light:{
      main: "#88736e"
    }
  },
  typography:{
    fontFamily: ['arial']
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
 <ResponsiveDrawer/>
    </ThemeProvider>
    {/* <App />
     */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
