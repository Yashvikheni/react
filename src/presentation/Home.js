import React from 'react'
import '../index.css'
const Home = () => {
;
  return (
    <div style={{marginTop:"200px"}}>Exam Demo
    <button className="add-button">Add to home screen</button>
    {/* <div id="notification" style={{visibility:"hidden"}}>A new version of this app is available. Click <a onClick={()=>handleClick()} id="reload" >here</a> to update.</div> */}
 </div>
  )
}
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
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

// let newWorker;
// let refreshing;
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./service-worker.js').then(function(registration) {
//     // Registration was successful
//     console.log('ServiceWorker registration successful with scope: ', registration.scope);
// }).catch(function(err) {
//     // registration failed :(
//       console.log('ServiceWorker registration failed: ', err);
//     });
// }


// // The click event on the notification
// function handleClick(){
// newWorker.postMessage({ action: 'skipWaiting' });
// }

// if ('serviceWorker' in navigator) {
// // Register the service worker
// navigator.serviceWorker.register('/service-worker.js').then(reg => {
// reg.addEventListener('updatefound', () => {

// // An updated service worker has appeared in reg.installing!
// newWorker = reg.installing;

// newWorker.addEventListener('statechange', () => {

// // Has service worker state changed?
// switch (newWorker.state) {
//  case 'installed':

// // There is a new service worker available, show the notification
//    if (navigator.serviceWorker.controller) {
//      let notification = document.getElementById('notification ');
// notification .style.visibility = 'show';
//    }

//    break;
// }
// });
// });
// });

// }

// // The event listener that is fired when the service worker updates
// // Here we reload the page
// navigator.serviceWorker.addEventListener('controllerchange', function () {
// if (refreshing) return;
// window.location.reload();
// refreshing = true;
// })
export default Home