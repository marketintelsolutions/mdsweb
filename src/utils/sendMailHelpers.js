import axios from "axios";

// CONTACT FORM
export const sendmail = async ({
  recipient_email,
  name,
  email,
  subject,
  message,
  formName,
  fields
}) => {
  if (name && email && subject && message) {
    try {
      const response = await axios
        .post("http://localhost:8080/send-email-ziltch", {
          // .post("https://ziltchbackend-e2366f2142c5.herokuapp.com/send_email", {
          // .post("https://pacbackend-ca764e382ef7.herokuapp.com/send-email-ziltch", {
          recipient_email,
          name,
          email,
          subject,
          message,
          formName,
          fields
        })

      console.log(response.data.message);
    } catch (error) {

      console.log(error);
    }


  } else return alert("Fill all fields");
};