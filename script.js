//your JS code here. If required.
let age=document.getElementById("age");
let name=document.getElementById("name");
// if(age.value==null || name.value==null){
// 	alert("Please Enter valid details")
// }

let promise= new promise((resolve,reject)=>{
	if(age.innerText>=18){
		setTimeout(()=>{
			resolve(alert(`Welcome,${name.innerText} . You can vote.`))
		,4000)
	}else{
		reject(alert(`Oh sorry${name.innerText}. You aren't old enough.`))
	}
})




	
