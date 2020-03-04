import byte from "./bytehandler.js";
document.getElementById("inputtype").value="";
document.getElementById("keyring").value="";
function getBytes(input){
  var output="";
  for (var i = 0; i < input.length; i++) {
      output += input[i].charCodeAt(0).toString(2) + " ";
  }
  return output;
}
document.getElementById('runs').onclick=()=>{
	const values=document.getElementById("inputtype").value;
	const key=document.getElementById("keyring").value;
	const vaby=getBytes(values);
	const keys=getBytes(key);
	console.log(vaby+"\n\n"+keys);
	const complete=byte(vaby, keys);
	const compile=complete.split("");
	let ints=0;
	let endd="";
	compile.forEach(s=>{
		endd+=s;
		if(ints===7){ints=0;endd+="<br>"}else{ints++;}
	});
	document.getElementById("outpus").innerHTML=endd
}