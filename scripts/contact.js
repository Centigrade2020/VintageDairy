emailjs.init("user_jPvpFZ5eOyUbbOPoxAPYC");
const sendMail = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phonenumber = document.getElementById("phone").value;
  console.log(name);

  if (name && email && phonenumber) {
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
  } else {
    alert("Please fill all the fields");
  }
};
