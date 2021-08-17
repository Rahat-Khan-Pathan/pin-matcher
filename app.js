// Other Buttons except 0-9 
const generateButton = document.getElementById('generate-btn');
const pinViewer = document.getElementById('pin-viewer');
const myPinViewer = document.getElementById('my-pin-viewer');
const submitButton = document.getElementById('submit-btn')
const notifyYes = document.getElementById('notify-yes');
const notifyNo = document.getElementById('notify-no');
const backspaceButton = document.getElementById('backspace-btn');
const clearButton = document.getElementById('clear-btn');
const totalTry = document.getElementById('try');

// All buttons from 0-9
const button0 = document.getElementById('btn-0');
const button1 = document.getElementById('btn-1');
const button2 = document.getElementById('btn-2');
const button3 = document.getElementById('btn-3');
const button4 = document.getElementById('btn-4');
const button5 = document.getElementById('btn-5');
const button6 = document.getElementById('btn-6');
const button7 = document.getElementById('btn-7');
const button8 = document.getElementById('btn-8');
const button9 = document.getElementById('btn-9');


var value;
var myValue='';
var count=3; //try
function showPin(value)
{
    pinViewer.value = value;
}
function showMyPin(myValue)
{
    myPinViewer.value = myValue;
}
function showTry(count)
{
    totalTry.innerHTML = count;
}
generateButton.addEventListener('click',function(event)
{
    value=Math.ceil(Math.random()*9999);
    if(value<1000) value+=1000;
    showPin(value);
    notifyYes.style.display = 'none';
    notifyNo.style.display = 'none';
    myValue='';
    showMyPin(myValue);
})
button0.addEventListener('click',function(event)
{
    myValue+='0';
    showMyPin(myValue);
})
button1.addEventListener('click',function(event)
{
    myValue+='1';
    showMyPin(myValue);
})
button2.addEventListener('click',function(event)
{
    myValue+='2';
    showMyPin(myValue);
})
button3.addEventListener('click',function(event)
{
    myValue+='3';
    showMyPin(myValue);
})
button4.addEventListener('click',function(event)
{
    myValue+='4';
    showMyPin(myValue);
})
button5.addEventListener('click',function(event)
{
    myValue+='5';
    showMyPin(myValue);
})
button6.addEventListener('click',function(event)
{
    myValue+='6';
    showMyPin(myValue);
})
button7.addEventListener('click',function(event)
{
    myValue+='7';
    showMyPin(myValue);
})
button8.addEventListener('click',function(event)
{
    myValue+='8';
    showMyPin(myValue);
})
button9.addEventListener('click',function(event)
{
    myValue+='9';
    showMyPin(myValue);
})
backspaceButton.addEventListener('click',function(event)
{
    myValue = myValue.slice(0,-1);
    showMyPin(myValue);
})
clearButton.addEventListener('click',function(event)
{
    myValue='';
    showMyPin(myValue);
})

submitButton.addEventListener('click',function(event)
{
    notifyYes.style.display = 'none';
    notifyNo.style.display = 'none';
    if(value == myValue)
    {
        notifyYes.style.display = 'block';
    }
    else
    {
        notifyNo.style.display = 'block';
        count--;
        showTry(count);
        if(count==0)
        {
            submitButton.disabled = true;
            submitButton.style.cursor = 'not-allowed';
        }
    }
})