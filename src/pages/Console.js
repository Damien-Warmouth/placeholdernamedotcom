import React from 'react';
import ScriptTag from 'react-script-tag';
import $ from "jquery"


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
  const newScript = () =>{
    return{
      componentDidMount() {
        const script = document.createElement('script');
        let url = '../scripts/termCursorEmulator.js'
        script.src = url;   //(This is external js url)
        script.async = true;
        document.body.appendChild(script);
      }
    
    }
  }
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
            <div id="terminal" onclick="$('setter').focus();">
              <p id="user" class="font-['Consolas']">C:\Users\You{'>'}
                  <div id="getter">
                  <newScript/>
                    <span id="writer"></span><b class="cursor" id="cursor">B</b>
                  </div>
                  <textarea type="text" id="setter" onkeydown="writeit(this, event);moveIt(this.value.length, event)" onkeyup="writeit(this, event)" onkeypress="writeit(this, event);" autoComplete='off'></textarea>
              </p>
            </div>
          </body>
        </div>

        </ThemeProvider>
    </div>

  )
}

export default Console