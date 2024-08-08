import axios from "axios";

const server = "https://api.wilsons.pk/";

const headers = {
  "Content-Type": "application/json",
  "wilson-api-key": "4575f1bc766790287f077b425b960a52",
};

const data = {
  host: "wilmart.pk",
};

export const makePostRequest = async (endpoint, data = {}) => {
  data.host = "wilmart.pk";
  const response = await axios
    .post(server + endpoint, data, {
      headers: headers,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("error", error);
      return error;
    });
  return response.data;
};

export async function MakeGetRequest(endpoint, data) {
  return await axios
    .get(server + endpoint, {
      params: data,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("error", error);
      return error;
    });
}

export async function MakePutRequest(endpoint, data) {
  return await axios
    .put(server + endpoint, data, {
      headers: headers,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("error", error);
      return error;
    });
}

export async function MakeDeleteRequest(endpoint) {
  return await axios
    .delete(server + endpoint)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log("error", error);
      return error;
    });
}
