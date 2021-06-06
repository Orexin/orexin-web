// https://web.dev/offline-fallback-page/
import '../css/404.css';
import svg404 from './../img/404.svg';

document.getElementById('svg-404').innerHTML = svg404;

//const lastPage = toString(history.go(-1))

document.getElementById('get-back').setAttribute('href', document.referrer);
//document.getElementById('get-back').setAttribute('title', lastPage);
document.getElementById('get-back').onclick = function() {
  history.go(-1);
  return false;
}