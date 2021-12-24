

const team = document.querySelector('.team');


deves.map( data => {
  team.innerHTML += `
  
  <div class="team-items">
     
  <img src="${data.phato}" alt="">
  <h1>Name : ${data.name}</h1>
  <h3>Age : ${data.age}</h3>
  <h2>Skill : ${data.skill}</h2>
  <h4>Location : ${data.location}</h4>
  <p>Lorem ipsum dolor sit amet.</p>
  <span>Gender : ${data.gender}</span>


</div>


  `;
})




const student = document.querySelector('.students');


students.map( data => {
  student.innerHTML += `
  
  <div class="students-data">

  <div class="data">
  <img src="${data.phato}" alt="">
  <h2>Roll : ${data.roll}</h2>
  <h1>Name : ${data.name}</h1>
  <h3>Age  : ${data.age}</h3>
  <h2>Class : ${data.class}</h2>
  <h4>Location : ${data.location}</h4>
  <p>Lorem ipsum dolor sit amet.</p>
  <span>Gender : ${data.gender}</span>

  
  </div>
     
 

</div>


  `;
})



const tbody = document.querySelector('.phone-data table tbody');


phone_book.map( ( data,index ) => {
  tbody.innerHTML += `
  
     
  <tr>
  <td>${index+1}</td>
  <td>${data.name}</td>
  <td>${data.age}</td>
  <td>${data.relation}</td>
  <td>${data.location}</td>
  <td>${data.gender}</td>
  <td>${data.phone}</td>
  <td> <img style = "width : 50px; hight : 40px;" src="${data.phato}" alt=""></td>
</tr>
  


  `;
})

