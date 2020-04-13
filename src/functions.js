import axios from "axios";

const BASE_EMAIL_URL =
  "https://us-central1-cool-living-properties.cloudfunctions.net";

export const sendEmail = async (queryId, name, email, phone, subj, body) => {
  console.log(`${BASE_EMAIL_URL}/sendMail?queryId=${queryId}&name=${name}&email=${email}&phone=${phone}&subj=${subj}&query=${body}`, "query");
  const { data } = await axios.post(
    `${BASE_EMAIL_URL}/sendMail?queryId=${queryId}&name=${name}&email=${email}&phone=${phone}&subj=${subj}&query=${body}`
  );
  console.log(data, 'data')
  return data;
};

export const newID = function() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
