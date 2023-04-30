const reviews = [
    {
        name : 'Kim Aliya',
        occupation : 'architect',
        review : 'Really very good work from FURNITURE. my workspace becomes cozy and tidy, i highly recommend them to you all.',
        image :  'image/1550271447.png'
    },

    {
        name : 'Debrah collins',
        occupation : 'Judge',
        review : 'Nice work from FURNITURE. my workspace becomes cozy and tidy, i highly recommend them to you all.',
        image :  'image/1550271447.png'
    },

    {
        name : 'Lewis Capaldi',
        occupation : 'Artist',
        review : 'very good work from FURNITURE. my workspace becomes cozy and tidy, i highly recommend them to you all.',
        image :  'image/1550271447.png'
    },

    {
        name : 'Bill Gates',
        occupation : 'Computer Scientist',
        review : 'Really very good work from FURNITURE. my workspace becomes cozy and tidy, i highly recommend them to you all.',
        image :  'image/1550271447.png'
    },

    {
        name : 'Ben Carson',
        occupation : 'Nuerosurgeon',
        review : 'FURNITURE gave my space a spectacular aura. my workspace becomes cozy and tidy, i highly recommend them to you all.',
        image :  'image/1550271447.png'
    }

];

function revPage () {
let revarr = 0;
let act = true;

    function increment (nums) {
       nums = revarr ++ ;
       if(nums <= reviews.length){
         document.getElementById('rnum').innerText = nums ;
         return nums
       }else {
         act = false ;
         
       }
      
      
    };
    // increment(revarr);
    
    function decrement (nums) {
        nums = revarr -- ;
        if(nums >= 0){
            document.getElementById('rnum').innerText = nums ;
            return nums
          }else {
            act = false ;
          }
        
    }
    
    document.getElementById("inc").addEventListener('click' , () => {
        let numi = increment(revarr);
    
        displayrev(numi);
    
    })
    
    document.getElementById("dec").addEventListener('click' , () => {
        let numi = decrement(revarr);
    
        displayrev(numi);
    })
    
    let revs = reviews.length ;
    
    document.getElementById('rtot').innerText = revs ;
    let num = document.getElementById('rnum').innerText;
    
    
    
    function displayrev (num) {
        let itname = reviews[num].name  ;
        let itrevie = reviews[num].review  ;
        let itimage = reviews[num].image  ;
        let itocc = reviews[num].occupation  ;
        
        document.getElementById('rev-name').innerText = itname ;
        document.getElementById('rev-img').style.src = itimage;
        document.getElementById('rev-occupation').innerText = itocc;
        document.getElementById('rev-review').innerText = itrevie ;
    };
    

}


revPage();