import '../css/404.css';
import svg404 from './../img/404.svg';
const regeneratorRuntime = require('regenerator-runtime');

document.getElementById('svg-404').innerHTML = svg404;

/* document.getElementById('get-back').addEventListener('click', () => {
	window.location.href = document.referrer;
}) */

//const lastPage = toString(history.go(-1))

document.getElementById('get-back').setAttribute('href', document.referrer);
//document.getElementById('get-back').setAttribute('title', lastPage);
document.getElementById('get-back').onclick = function() {
  history.go(-1);
  return false;
}

      // Check if the server is responding and reload the page if it is.
      // This handles the case when the device is online, but the server
      // is offline or misbehaving.
/*       async function checkNetworkAndReload() {
        try {
          const response = await fetch('.');
          // Verify we get a valid response from the server
          if (response.status >= 200 && response.status < 500) {
            window.location.reload();
            return;
          }
        } catch {
          // Unable to connect to the server, ignore.
        }
        window.setTimeout(checkNetworkAndReload, 2500);
      }

      checkNetworkAndReload(); */