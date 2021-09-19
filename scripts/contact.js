emailjs.init("user_jPvpFZ5eOyUbbOPoxAPYC");
let form = document.getElementById('myform')

function sendMail(){
 
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phonenumber = document.getElementById("phone").value;
  let quantity = document.getElementById("quantity").value;
  let description = document.getElementById("description").value;

  // -----------------emailing---------------------------------------
  if (name && email && phonenumber) {
    console.log(name);
    const contactParams = {
      from_name: name,
      from_email: email,
      messages: "test",
    };
    emailjs
      .send("service_qi07cwl", "template_clfjccd", contactParams)
      .then((res) => {
        console.log("Email sent status = ",res.text);
      });

    // -------------------------Data to spreadsheet----------------------

    fetch("https://api.apispreadsheets.com/data/17851/", {
      method: "POST",
      body: JSON.stringify({
        data: {
          Name: name,
          Phone: phonenumber,
          Quantity: quantity,
          Email: email,
          Description: description,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        console.log("Updated in spreadsheet ");
        name = "";
        phone = "";
        quantity = "";
        email = "";
        description = "";
        alert("Successfully submit your inquiry")
        window.location.reload()
      }
    });
    // -------------------------------------------------------------------
  }else{
    alert("Enter all fields")
  }
}

// const sendMail = (e) => {
//   e.preventDe
 
// };
