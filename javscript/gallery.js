import Data from './Data.js' ;
// import sinpt from './search.js' ;

// display elements with      

const ElementDisp = (Arr) => {

  Arr.filter(d => {
   let html2 , newHtml2;
      console.log([d.name , d.desc , d.img , d.quantity ,d.price])
      html2 =  '<div class="pr-build"><img src= %src% alt=""><div class="pr-build-t"><div class="pr-name">%name%</div><div class="pr-desc">%desc%</div><p class="pr-price">$%price%</p><p>%quan%</p><button>Buy</button><button class="ad-cart">Add To Cart</button></div></div>'

      newHtml2 = html2.replace('%quan%', d.quantity);
      newHtml2 = newHtml2.replace('%src%', d.img);
      newHtml2 = newHtml2.replace('%name%', d.name);
      newHtml2 = newHtml2.replace('%price%', d.price);
      newHtml2 = newHtml2.replace('%desc%', d.desc);
  
      document.querySelector('.pr').insertAdjacentHTML("beforeend" , newHtml2);  
  })

};


// Pagination 
    let Cp , Ni , elem ;
    Cp = 1 ;
    Ni = 6 ;
    
    function Pagination (Ni ,Cp , Data ) {
      let St , Ed , pr , pg;
      pr = document.querySelectorAll('.pr-build');
      pr.forEach(cur => {
          cur.remove();
      })
        Cp-- ;
      console.log(Cp)
      St = Ni * Cp ;
      Ed = St + Ni ;

      pg = Data.splice(St , Ed);
      console.log(pg , St , Ed);
        ElementDisp(pg);
    
    }
 

const displayItem = (function (Data) {
     Pagination(Ni , Cp , Data );
});

console.log(Data);

const searchItem = (function () {
  const button = document.querySelector('.bts');
  button.addEventListener('click', () => {
    
    const pr = document.querySelectorAll('.pr-build');
    pr.forEach(cur => {
        cur.remove();
    })
    const sinpts = document.querySelector('.sinpt').value;
    const filt = Data.filter(cur => cur.name === sinpts);
    console.log(filt);
    Pagination(Cp , Ni , Data , elem);

  });
   
});

searchItem();
                                   
displayItem(Data);






export {searchItem , ElementDisp } ;