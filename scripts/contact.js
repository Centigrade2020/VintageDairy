emailjs.init("user_jPvpFZ5eOyUbbOPoxAPYC");
const sendMail = ()=>{
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phonenumber = document.getElementById("phone").value;
  console.log(name)
// -----------------emailing---------------------------------------
  if(name && email && phonenumber){
  const contactParams = {
    from_name: name,
    from_email: email,
    messages: "test",
  };
  emailjs
    .send("service_qi07cwl", "template_clfjccd", contactParams)
    .then((res) => {
      console.log(res.text);
    });
  
// -------------------------Data to spreadsheet----------------------
                            

  fetch("https://api.apispreadsheets.com/data/17851/", {
	  method: "POST",
	  body: JSON.stringify({"data": {"Name":name,"Email":email,"Phone":phonenumber}}),
  }).then(res =>{
	    if (res.status === 201){
		  console.log("entered ")
	  }
	  else{
		  alert("Some error occured please contact centigrade.ad@gmail.com")
	  }
})
// -------------------------------------------------------------------

  }else{
    alert("Please fill all the fields")
  }
};

