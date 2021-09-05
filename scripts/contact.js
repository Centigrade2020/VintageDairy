// emailjs.init("user_jPvpFZ5eOyUbbOPoxAPYC");
// document.getElementById("myform").addEventListener("submit", (e) => {
//   e.preventDefault();
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;

//   const contactParams = {
//     from_name: name,
//     from_email: email,
//     messages: "test",
//   };
//   emailjs
//     .send("service_qi07cwl", "template_clfjccd", contactParams)
//     .then((res) => {
//       console.log(res);
//     });
//   console.log("hello");
// });

function onSubmit() {
  const name = document.getElementById("email").text;
  console.log(name);
}
