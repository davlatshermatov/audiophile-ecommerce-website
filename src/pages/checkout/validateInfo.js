export default function validateInfo(values) {
  let errors = {};

  //Name
  if (!values.name.trim()) {
    errors.name = "Name reqiured";
  }

  //Email
  if (!values.email) {
    errors.email = "Email reqiured";
  } else if (!/^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  //Phone Number
  if (!values.phoneNumber) {
    errors.phoneNumber = "Phone number is required";
  }
  if (!/^((\+)33|0)[1-9](\d{2}){4}$/) {
    errors.phoneNumber = "Wrong format";
  }

  //Address
  if (!values.address) {
    errors.address = "Address reqiured";
  }

  //Zip Code
  if (!values.zipCode) {
    errors.zipCode = "ZIP code reqiured";
  }

  //City
  if (!values.city) {
    errors.city = "City reqiured";
  }

  //Country
  if (!values.country) {
    errors.country = "Country reqiured";
  }
}
