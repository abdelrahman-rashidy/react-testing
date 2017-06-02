import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


function trick(){
  const home = 
  (
       
    <div>  <h2>hi there</h2> <br/>  hello    </div>
  )  
ReactDOM.render
( 
  home, 
  document.getElementById('root')
);
};

setInterval(trick,10000)






/*
                       *******************  flip coin function and render it at img ***************
   function coinToss () {
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

var pics = {
  kitty: 'imgs.jpg',
  doggy: 'img.jpg'
};

// if/else statement begins here:
if (coinToss() == 'heads'){
  var img = <img className="omg" src={pics.kitty} alt="cat"/>
}else{
  var img = <img className="omg" src={pics.doggy} alt="dog"/>
}
ReactDOM.render(
	img,
	document.getElementById('root')
);
*/