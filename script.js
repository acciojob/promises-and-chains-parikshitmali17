//your JS code here. If required.
document.getElementById("voteForm").addEventLisrner("submit",(e)=>{
	e.preventDefault()
	let age=document.getElementById("age");
let name=document.getElementById("name");
if(age.value==null || name.value==null){
	alert("Please Enter valid details")
}
 const promise= new promise((resolve,reject)=>{
setTimeout(()=>{
		if(age.value>=18){
		
			resolve(`Welcome,${name.value}. You can vote.`)
		
	}else{
		reject(`Oh sorry${name.value}. You aren't old enough.`)
	}
},4000)
})

promise.then((message)=>{
	alert(message)
}).catch((message)=>{
	alert(message)
})
	

	
