import React from 'react';
import ScriptTag from 'react-script-tag';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '../styles/Console.css';
import { margin } from '@mui/system';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Console = () => {
  return (
    <div >
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      
      <ThemeProvider theme={darkTheme}>
           <CssBaseline />

        <h1 class="font-['Consolas']">
            Damien Warmouth [Version 1.0.0]<br/>
            (c)  /help Corporation. All rights reserved (maybe idk. seriously, do /help).
        </h1>
        
        <br/>

        <div>
          <body>
            <p class="font-['Consolas']">C:\Users\You{'>'}
            <input class="ml-1" id='textField' type='text' autoComplete='off'/> {/* input & textarea */}
            </p>
          <ScriptTag isHydrating={true} type="text/javascript" src="../scripts/focusInputScript.js" /> 
          </body>
        </div>

        </ThemeProvider>
    </div>
  )
  
}

export default Console