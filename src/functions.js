import axios from "axios";

const BASE_EMAIL_URL =
  "https://us-central1-cool-living-properties.cloudfunctions.net";

export const sendEmail = async (queryId, name, email, phone, subj, body) => {
  console.log(queryId, "queryId");
  // console.log(
  //   `${BASE_EMAIL_URL}/sendMail?name=${name}&email=${email}&phone${phone}&subj=${subj}&query=${body}`
  // );
  const { data } = await axios.get(
    `${BASE_EMAIL_URL}/sendMail?queryId=${queryId}&name=${name}&email=${email}&phone=${phone}&subj=${subj}&query=${body}`
  );
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

// export const updateVote = async (dataType, id, change) => {
//   const { data } = await axios.patch(
//     `${BASE_URL}/${dataType}/${id}?votes=${change}`
//   );
//   return data.votes;
// };

// export const addComment = async (article_id, dataToAdd) => {
//   const { data } = await axios.post(
//     `${BASE_URL}/articles/${article_id}/comments`,
//     dataToAdd
//   );
//   return data;
// };

// export const deleteComment = async comment_id => {
//   const { data } = await axios.delete(`${BASE_URL}/comments/${comment_id}`);
//   return data;
// };
