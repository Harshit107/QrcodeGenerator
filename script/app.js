
function getNewQR() {
  return  `https://chart.googleapis.com/chart?cht=qr&chs=${getWidth()}x${getHeight()}&chl=${getText()}`;
}

const requestQR = async function() {
  QrCode.src = getNewQR();
}


function startdownload() {

  var url = getNewQR();
  var fileName = 'image';
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function(){
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement('a');
      tag.href = imageUrl;
      tag.download = fileName;
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
  }
  xhr.send();
}

// Example POST method implementation:
async function sendEmailToUser(url = getNewQR(), data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}




const sendEmailClick = function(){
  let userEmailAddress = prompt('Enter your Email Address','');
  if(userEmailAddress == undefined || userEmailAddress === '')
    return;
  const data = {
    recipientsEmail : userEmailAddress, //  use Array of String for multiple email
    "appName" : "Qr-code Generator", 
    "subject" : "QR-Code download Link",
    "senderEmail" : "YourQR", //eg: Your-App-Name // donot include @donot-reply.online // no space or special char
    "emailContent" : "",  //your Email containt
    "HTMLfile" : emailString(getNewQR()) //must be in String and single html formate  
  } 

  sendEmailToUser('https://send.donot-reply.online/public/email/notification',data)
  .then((data) => {
    console.log(data); 
  })
  .catch(e =>{
    console.log('e :>> ', e);
  });

}

generateButton.addEventListener('click', setQrDimension);
downloadBtn.addEventListener('click', startdownload);
sendEmailBtn.addEventListener('click', sendEmailClick);
textArea.addEventListener('input',requestQR);
setQrDimension(200,200);
requestQR();