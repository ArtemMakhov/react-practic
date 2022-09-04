import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { theme } from './theme';

import { UserContext } from './path/userContext';
import {UserProvider} from './path/userContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ThemeProvider theme={theme}>
      <UserContext.Provider value={{username: "Mango"}}>
        <UserProvider>
          <App />
        </UserProvider>
        
        </UserContext.Provider>
    </ThemeProvider>
    
  </React.StrictMode>
);
