import axios from "axios";

// CONTACT FORM
export const sendmail = ({
  recipient_email,
  name,
  email,
  subject,
  message,
  formName,
  fields
}) => {
  if (name && email && subject && message) {
    axios
      // .post("http://localhost:5050/send_email", {
      .post("https://ziltchbackend-e2366f2142c5.herokuapp.com/send_email", {
        recipient_email,
        name,
        email,
        subject,
        message,
        formName,
        fields
      })
      .then(() => alert("Message Sent successfully"))
      .catch(() => alert("Ooops...failed"));
  } else return alert("Fill all fields");
};