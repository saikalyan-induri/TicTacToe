
var t1="*",t2="*",t3="*",t4="*",t5="*",t6="*",t7="*",t7="*",t8="*",t9="*",par=0,win=0,count=0;

var r1=false,r2=false,r3=false,r4=false,r5=false,r6=false,r7=false,r8=false,r9=false;

function func1(ele){
	var x=ele.textContent;
	t1=document.querySelector('#b1').textContent;
	t2=document.querySelector('#b2').textContent;
	t3=document.querySelector('#b3').textContent;
	t4=document.querySelector('#b4').textContent;
	t5=document.querySelector('#b5').textContent;
	t6=document.querySelector('#b6').textContent;
	t7=document.querySelector('#b7').textContent;
	t8=document.querySelector('#b8').textContent;
	t9=document.querySelector('#b9').textContent;
	console.log(ele); console.log(win);
	if((ele.style.backgroundColor=="white" || ele.style.backgroundColor=="black") && win==0){
		if(par%2==0){
			ele.textContent="X";
			ele.style.backgroundColor="#dc685a";
		}
		else{
			ele.textContent="O";
			ele.style.backgroundColor="#ecaf4f";
		} 
		par=par+1; par=par%2; count++;
	}
	if(t1=="X" || t1=="O"){
		r1=true;
	}
	if(t2=="X" || t2=="O"){
		r2=true;
	}
	if(t3=="X" || t3=="O"){
		r3=true;
	}
	if(t4=="X" || t4=="O"){
		r4=true;
	}
	if(t5=="X" || t5=="O"){
		r5=true;
	}
	if(t6=="X" || t6=="O"){
		r6=true;
	}
	if(t7=="X" || t7=="O"){
		r7=true;
	}
	if(t8=="X" || t8=="O"){
		r8=true;
	}
	if(t9=="X" || t9=="O"){
		r9=true;
	}
}

function hoverFunction(ele){
	var x=ele.textContent;
	if(x!="X" && x!="O" && win==0){
		if(par%2==0){
			ele.textContent="X";
			ele.style.backgroundColor="black";
		}
		else{
			ele.textContent="O";
			ele.style.backgroundColor="black";
		}
		ele.style.color="white";
	}
}

function mouseOut(ele){
	if(ele.style.backgroundColor=="black"){
		ele.style.backgroundColor= "rgba(120, 190, 197, 0.7)";
		ele.textContent="";
	}
}

function myFunc(){
	if(par%2==0){
		document.querySelector('#turn').innerHTML="Player X's turn";
	}
	else{
		document.querySelector('#turn').innerHTML="Player O's turn";
	}
	t1=document.querySelector('#b1').textContent;
	t2=document.querySelector('#b2').textContent;
	t3=document.querySelector('#b3').textContent;
	t4=document.querySelector('#b4').textContent;
	t5=document.querySelector('#b5').textContent;
	t6=document.querySelector('#b6').textContent;
	t7=document.querySelector('#b7').textContent;
	t8=document.querySelector('#b8').textContent;
	t9=document.querySelector('#b9').textContent;
	if(t1==t2 && t2==t3){
		if(t1=="X"){
			win=1;
		}
		else if(t1=="O"){
			win=2;
		}
	}

	if(t4==t5 && t5==t6){
		if(t4=="X"){
			win=1;
		}
		else if(t4=="O"){
			win=2;
		}
	}

	if(t7==t8 && t8==t9){
		if(t7=="X"){
			win=1;
		}
		else if(t7=="O"){
			win=2;
		}
	}

	if(t1==t4 && t4==t7){
		if(t1=="X"){
			win=1;
		}
		else if(t1=="O"){
			win=2;
		}
	}

	if(t2==t5 && t5==t8){
		if(t2=="X"){
			win=1;
		}
		else if(t2=="O"){
			win=2;
		}
	}

	if(t3==t6 && t6==t9){
		if(t3=="X"){
			win=1;
		}
		else if(t3=="O"){
			win=2;
		}
	}

	if(t1==t5 && t5==t9){
		if(t1=="X"){
			win=1;
		}
		else if(t1=="O"){
			win=2;
		}
	}

	if(t3==t5 && t5==t7){
		if(t3=="X"){
			win=1;
		}
		else if(t3=="O"){
			win=2;
		}
	}

	if(win==1){
		document.querySelector('#turn').innerHTML="Player X Won!!!";
	}

	if(win==2){
		document.querySelector('#turn').innerHTML="Player O Won!!!";
	}

	if(count==9 && win==0){
		win=3;
		document.querySelector('#turn').innerHTML="Draw!!!";
	}

}


function Restart(){
	win=0; par=0; count=0;
	document.querySelector('#b1').textContent="";
	document.querySelector('#b1').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t1=document.querySelector('#b1').textContent;
	document.querySelector('#b2').textContent="";
	document.querySelector('#b2').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t2=document.querySelector('#b2').textContent;
	document.querySelector('#b3').textContent="";
	document.querySelector('#b3').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t3=document.querySelector('#b3').textContent;
	document.querySelector('#b4').textContent="";
	document.querySelector('#b4').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t4=document.querySelector('#b4').textContent;
	document.querySelector('#b5').textContent="";
	document.querySelector('#b5').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t5=document.querySelector('#b5').textContent;
	document.querySelector('#b6').textContent="";
	document.querySelector('#b6').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t6=document.querySelector('#b6').textContent;
	document.querySelector('#b7').textContent="";
	document.querySelector('#b7').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t7=document.querySelector('#b7').textContent;
	document.querySelector('#b8').textContent="";
	document.querySelector('#b8').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t8=document.querySelector('#b8').textContent;
	document.querySelector('#b9').textContent="";
	document.querySelector('#b9').style.backgroundColor="rgba(120, 190, 197, 0.7)";
	t9=document.querySelector('#b9').textContent;
	document.querySelector('#turn').innerHTML="Player X's turn";
}