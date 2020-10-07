window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    widthObj = document.getElementById('txtWidth');
	heightObj = document.getElementById('txtHeight')
    costObj = document.getElementById('tdCost');
    document.getElementById('btnReset').onclick = resetInputs;
    document.getElementById('btnCalcCost').onclick = calcCost;
}

function resetInputs() {
    lengthObj.value = '';
    widthObj.value = '';
	heightObj.value = '';
	costObj.innerHTML = '';
}


function surfaceArea() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
    if(isNaN(length) || isNaN(width) || isNaN(height)) {
        alert('Invalid length or Width or heigth');
        return;
    }
	return (length*width*2) + (length*height*2) + (height*width*2);
}


function edges() {
    var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
    if(isNaN(length) || isNaN(width) || isNaN(height)) {
        alert('Invalid length or Width or heigth');
        return;
    }
    return (length*2) + (height*4) + (width*2);
}
	
	
function calcTSA() {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
    var height = new Number(heightObj.value);
	var sa = surfaceArea();
	var cost;
	if (height >25){
		cost = 0.1;
		}else{
		cost = 0.06;
	}
        return (sa*cost);	
}
			
			
function calcGlue() { 
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
    var height = new Number(heightObj.value);
	var glue = 0.1;

	return (((length*2)+(width*2)+(height*4))*glue);
}
			
function calcTime() {
	var areaCost = (60/6000);
	var surface = surfaceArea();
	return (areaCost*surface);
}
			
			
			
function calcCost() {
	var TSA = calcTSA();
	var Time = calcTime();
	var glue = calcGlue();
	var result = ((TSA+Time+glue)*1.1)
	var amount = result.toFixed(2);
	
	costObj.innerHTML = "$" + amount;
}
