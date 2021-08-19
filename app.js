// Other Buttons except 0-9 
const generateButton = document.getElementById('generate-btn');
const pinViewer = document.getElementById('pin-viewer');
const myPinViewer = document.getElementById('my-pin-viewer');
const submitButton = document.getElementById('submit-btn')
const notifyYes = document.getElementById('notify-yes');
const notifyNo = document.getElementById('notify-no');
const totalTry = document.getElementById('try');


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
    if(count == 0) totalTry.innerHTML = "You have reached limit. Generate new pin";
    else totalTry.innerHTML = count;
}

// Generate button 
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

// All buttons using eventBubble 
document.getElementById('key-pad').addEventListener('click',function(event){
    let val = event.target.innerText;
    if(isNaN(val))
    {
        if(val=='<')
        {
            myValue=myValue.substring(0,myValue.length-1);
            showMyPin(myValue);
        }
        if(val=='C')
        {
            myValue='';
            showMyPin(myValue);
        }
    }
    else
    {
        myValue+=(val);
        showMyPin(myValue);
    }
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