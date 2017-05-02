/**
 * Created by Edward_J_Apostol on 2017-04-28.
 * Edit by Jason_Ng on 2017-05-01.
 */

require('file-loader?name=../dist/index.html!./index.html');

console.log("Index.JS is being intergrated.");

import App from './App';

let app = new App();
