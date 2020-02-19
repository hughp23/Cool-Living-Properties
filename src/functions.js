import axios from "axios";

const BASE_EMAIL_URL = "https://us-central1-cool-living-properties.cloudfunctions.net";

export const sendEmail = async (dest, subj, body) => {
  const { data } = await axios.get(`${BASE_EMAIL_URL}/sendMail?dest=${dest}&subj=${subj}&query=${body}`);
  console.log(data, 'data before');
  return data;
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
