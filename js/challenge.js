
let counter = document.querySelector("#counter");
let plus = document.getElementById('plus');
   plus.addEventListner("click", function(){
     counter.innerHtml = counter.innerHtml+1;
   });
function decrement() {
      document.getElementById('minus').stepDown();
} 

decrement();