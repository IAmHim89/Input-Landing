const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const marital = document.getElementById("marital");
const ethnicity = document.getElementById("ethnicity");
const submit = document.getElementById("sub_btn");
const getCheckedValue = (name) => {
  const checkedRadio = document.querySelector(`input[name=${name}]:checked`);
  return checkedRadio ? checkedRadio.value : "nothing is checked!";
};

submit.addEventListener("click", (e) => {
  e.preventDefault();

  const arrayForm = [firstName, lastName, email, marital, ethnicity,];

  const formObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    marital: marital.value,
    ethnicity: ethnicity.value,
    gender: getCheckedValue("gender"),
    exercise: getCheckedValue("exercise"),
    work: getCheckedValue("work"),
    kids: getCheckedValue("kids"),
  };

  arrayForm.push(formObj);
  console.log("btn works!");
  console.table(formObj);
  console.log(arrayForm);
});
