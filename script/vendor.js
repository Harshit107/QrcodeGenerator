const textArea = document.getElementById('text-area');
const generateButton = document.getElementById('generate');
const width = document.getElementById('width');
const height = document.getElementById('height');
const QrCode = document.getElementById('qr-code');


function getText() {
  return textArea.value;
}

function getWidth() {
  return width.value;
}

function getHeight() {
  return height.value;
}

function setQrDimension(w,h) {
  console.log('QrCode :>> ', QrCode);
  QrCode.width = w || getWidth();
  QrCode.height = h || getHeight();

}


