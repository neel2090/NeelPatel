var res ="";
function one()
{
	res=res+1;
	document.getElementById("mainInput").value=res;
}
	function two()
{
	res=res+2;
	document.getElementById("mainInput").value=res;
}
	function three()
{
	res=res+3;
	document.getElementById("mainInput").value=res;	
}
function four()
{
	res=res+4;
	document.getElementById("mainInput").value=res;
}
function five()
{
	res=res+5;
	document.getElementById("mainInput").value=res;
}
function six()
{
	res=res+6;
	document.getElementById("mainInput").value=res;
}
function seven()
{
	res=res+7;
	document.getElementById("mainInput").value=res;
}
function eight()
{
	res=res+8;
	document.getElementById("mainInput").value=res;
}
function nine()
{
	res=res+9;
	document.getElementById("mainInput").value=res;
}
function zero()
{
	res=res+0;
	document.getElementById("mainInput").value=res;
}
function add()
{
	res=res+"+";
	document.getElementById("mainInput").value=res;
}
function sub()
{
	res=res+"-";
	document.getElementById("mainInput").value=res;
}
function mul()
{
	res=res+"*";
	document.getElementById("mainInput").value=res;
}
function div()
{
	res=res+"/";
	document.getElementById("mainInput").value=res;
}
function dec()
{
	res=res+".";
	document.getElementById("mainInput").value=res;
}
function clearAll()
{
	res = " ";
	document.getElementById("mainInput").value=res;
}
function equal()
{
	document.getElementById("mainInput").value=eval(res);
}