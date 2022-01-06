const SubmitForm = (e) => {
    var name, email, message, contact;
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    contact = document.getElementById('contact').value;
    message = document.getElementById('message').value;
    console.log('data');
    Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "gmail@gmail.com", 
        Password: "enterpassword", 
        To: 'shlok.40516403218@ipu.ac.in', 
        From: "gmail@gmail.com", 
        Subject: "Sending Email using javascript", 
        Body: "Well that was easy!!", 
      }) 
        .then(function (message) { 
            console.log(message)
          alert("mail sent successfully: ", message) 
        }); 

    return false;
}