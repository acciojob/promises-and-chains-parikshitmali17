// //your JS code here. If required.
// document.getElementById("voteForm").addEventListener("submit",(e)=>{
// 	e.preventDefault()
// 	let age=document.getElementById("age");
// let name=document.getElementById("name");
// if(!age.value || !name.value){
// 	alert("Please Enter valid details")
// }
// 	  age = parseInt(age);
//  const promise= new Promise((resolve,reject)=>{
// setTimeout(()=>{
// 		if(age.value>=18){
		
// 			resolve(`Welcome,${name.value}. You can vote.`)
		
// 	}else{
// 		reject(`Oh sorry${name.value}. You aren't old enough.`)
// 	}
// },4000)
// })

// promise.then((message)=>{
// 	alert(message)
// }).catch((message)=>{
// 	alert(message)
// })


document.getElementById("voteForm").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  let age = document.getElementById("age").value;
  let name = document.getElementById("name").value;

  // Input validation
  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  age = parseInt(age); // Convert age to number

  // Create a promise
  const votePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry, ${name}. You aren't old enough.`);
      }
    }, 4000);
  });

  // Handle promise resolution/rejection
  votePromise
    .then((message) => alert(message))
    .catch((message) => alert(message));
});


	
