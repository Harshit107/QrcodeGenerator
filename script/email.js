const emailString = function(url) {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>My Beautiful Button</title>
      <style type="text/css">
        body {
          font-family: Arial, sans-serif;
          font-size: 20px;
          line-height: 1.5;
          color: #444;
          background-color: #f9f9f9;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 1em;
          border: 2px solid #f0f;
          
          
        }
        .button {
          display: inline-block;
          padding: 0.5em 1em;
          background-color: #007bff;
          color: #fff;
          border-radius: 4px;
          text-decoration: none;
         
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1></h1>
        <p>Dear User,<br>
  
  I wanted to take a moment to express our gratitude for your recent download of our QR code. We hope that this code helps you to connect with your customers, increase engagement, and drive more business.
  <br>We understand that there are many options out there, and we're thrilled that you chose our QR code. It's great to know that we're helping businesses like yours to succeed and thrive.
  <br>If you have any questions or feedback, please don't hesitate to reach out at <b>contact@harshit107.tech</b>. We're always here to support you and provide you with the best possible service.
  <br>Once again, thank you for choosing our QR code. We're confident that it will make a real difference in your marketing efforts, and we look forward to seeing the results.
  <br><br>
  Best regards,
  <br><b>Harshit Keshari<b>
  
  </p>
        
        <p><a class="button" href="${url}">Download </a></p>
      </div>
    </body>
  </html>
  `

}

