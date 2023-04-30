


    
// create function 

const formData = (function (event){

    //   event.preventDefault();
      
      // form data
      const fname = document.querySelector('.first').value;
      const lname = document.querySelector('.second').value;
      const phone = document.querySelector('.phone').value;
      const email = document.querySelector('.email').value;
      const pass = document.querySelector('.pass').value;
     
      // form data stored in local storage
          localStorage.setItem('Firstname' , fname);
          localStorage.setItem('Lastname' , lname);
          localStorage.setItem('Phone' , phone);
          localStorage.setItem('Email' , email);
          localStorage.setItem('Pass' , pass);

     //go to homepage after creation
     
        const bta = document.querySelector('.bt-a');
        bta.href = 'index.html' ;

        console.log(localStorage, fname);


        return {
            getData : [fname , lname , phone , email , pass]
    }
});


document.querySelector('.bt-a').addEventListener('click' , formData);
   

// sign in function 







