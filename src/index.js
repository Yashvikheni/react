import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"; 
import store from "./store/store";
import { BrowserRouter } from 'react-router-dom';
//import swDev from './swDev'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
     <BrowserRouter>
    <App />
    <div >
  <span class="popuptext" id="myPopup">add to home screen</span>
</div>
    {/* <button className="add-button">Add to home screen</button> */}
  
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorkerRegistration.register();
reportWebVitals();
let deferredPrompt;
const addBtn = document.getElementById('myPopup');
addBtn.classList.toggle = 'none';
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
addBtn.classList.toggle = 'show';

  window.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.classList.toggle = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});

//swDev();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

