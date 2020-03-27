 document.querySelector('#generate-names').addEventListener('submit',FormSubmit);

 function FormSubmit(e){
     e.preventDefault();

     const origin = document.getElementById('country').value;
     const gender = document.getElementById('genre').value;
     const totalNames = document.getElementById('quantity').value;

     let url = 'https://uinames.com/api/?';

     if(origin !== '')
     {
        url += `region=${origin}&`;
     }
     
     if(gender !== '')
     {
         url += `gender=${gender}&`;
     }

     if(totalNames !== '')
     {
         url += `amount=${totalNames}&`;  
     }

 
 

 const xhr = new XMLHttpRequest();

 xhr.open('GET',url,true);

 xhr.onload = function(){
     if(this.status == 200)
     {
     let names = JSON.parse(this.responseText);
     console.log(names);

     let output = '';

     output += `<ul class="list">`;

     names.forEach((person)=>{
         output += `
           <li>${person.name}</li>
         `;
     });

     output += `</ul>`;

    document.querySelector('#result').innerHTML = output;
     }
  }
 
  xhr.send();
}