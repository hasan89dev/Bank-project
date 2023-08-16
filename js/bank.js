var loginbtn=document.getElementById('loginbtn');
loginbtn.addEventListener('click',function(){
	var email=document.getElementById('email');
	var pass=document.getElementById('pass');


	var loginemail="bank@gmail.com";  
	var passlogin=1234;
	var loginform=document.getElementById('loginform'); 
	var block= document.getElementById('block');
  
	if(loginemail==email.value && passlogin==pass.value){
       
       loginform.style.display="block";

       block.style.display ="block";

	}
	else{
		alert('failed');
	}
})

var addbtn= document.getElementById('addbtn');
addbtn.addEventListener('click',function(){
	var deposit=document.getElementById('deposit').innerHTML;
	var newdeposit=parseFloat(deposit) 
    var depoinput=document.getElementById('depoinput').value; 
    var newdepoinput=parseFloat(depoinput);

    var result= newdeposit+newdepoinput;
    document.getElementById('deposit').innerHTML= result;

    var balance=document.getElementById('balance').innerHTML; 
    var newbalance= parseFloat(balance);
    var originalbalance=newbalance+newdepoinput;
    document.getElementById('balance').innerHTML=originalbalance;
})

var withdrawbtn=document.getElementById('withdrawbtn');
withdrawbtn.addEventListener('click',function(){
   var withdraw=document.getElementById('withdraw').innerHTML;
   var newwithdraw=parseFloat(withdraw);
   var withinput=document.getElementById('withinput').value; 
   var newwithinput=parseFloat(withinput);
   var withresult=newwithinput+newwithdraw;
   document.getElementById('withdraw').innerHTML=withresult;
   var x=document.getElementById('balance').innerHTML;
   var y= x-newwithinput;
   var z=document.getElementById('balance').innerHTML=y;
   if(z<0){
      alert('you do not have balance');
      
   }

   	
 })