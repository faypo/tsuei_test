import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

// console.log("Hello world!");

document.getElementById("down").addEventListener('click',function(){
    console.log('test');
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= 1) {
        document.getElementById("myNumber").value = 1;
    }
});

document.getElementById("up").addEventListener('click',function(){
    console.log('test');
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
});

