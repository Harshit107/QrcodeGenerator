
const textArea = document.getElementById('text-area');
const width = document.getElementById('width');
const height = document.getElementById('height');
const QrCode = document.getElementById('qr-code');

const downloadBtn = document.getElementById('download-btn');
const sendEmailBtn = document.getElementById('email-button');
const generateButton = document.getElementById('generate');



function getText() {
  return textArea.value;
}



function getWidth() {
  return width.value || 200;
}

function getHeight() {
  return height.value || getWidth() || 200;
}

function setQrDimension(w,h) {
  QrCode.width= w || getWidth();
  QrCode.height = h || getHeight();
}



