//your JS code here. If required.
document.getElementById("voteForm").addEventLisrner("submit",(e)=>{
	e.preventDefault()
	let age=document.getElementById("age");
let name=document.getElementById("name");
if(age.value==null || name.value==null){
	alert("Please Enter valid details")
}
	return
})

const function promise= new promise((resolve,reject)=>{
setTimeout(()=>{
		if(age.value>=18){
		
			resolve(alert(`Welcome,${name.value} . You can vote.`))
		
	}else{
		reject(alert(`Oh sorry${name.value}. You aren't old enough.`))
	}
},4000)
})




	
