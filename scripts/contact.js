emailjs.init("user_jPvpFZ5eOyUbbOPoxAPYC");
const sendMail = ()=>{
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phonenumber = document.getElementById("phone").value;
  console.log(name)

  if(name && email && phonenumber){
  const contactParams = {
    from_name: name,
    from_email: email,
    messages: "test",
  };
  emailjs
    .send("service_qi07cwl", "template_clfjccd", contactParams)
    .then((res) => {
      console.log(res);
    });
  console.log("hello");
  }else{
    alert("Please fill all the fields")
  }
};

// function onSubmit() {
//   const name = document.getElementById("email").text;
//   console.log(name);
// }
