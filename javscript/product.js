import Data from './Data.js' ;


let d ;
  for (d of Data){
       if (d.id === 7){
         break ;
       }
       let newHtml , html
       //create div element 
      //   console.log([d.price, d.id , d.name ,d.desc ,d.img , d.price])
       html = '<div class="p-build"><img src=%src% alt=""><div class="p-build-t"><div class="p-name">%name%</div><p class="p-price">$%price%</p><p>%p-quan%</p><button>Get</button></div></div>'
   
        newHtml = html.replace('%src%', d.img);
        newHtml = newHtml.replace('%name%', d.name);
        newHtml = newHtml.replace('%price%', d.price);
        newHtml = newHtml.replace('%p-quan%', d.quantity);
       //add the data element to it using javascript 
       document.querySelector('.p').insertAdjacentHTML('beforeend' , newHtml);
   
};