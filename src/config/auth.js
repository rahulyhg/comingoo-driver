const base_url = "https://comingoo.herokuapp.com/drivers";

const login = async payload => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JOSN.stringify(payload)
  };

  try {
    const rawData = await fetch(`${base_url}/loginDriver`, options);
    const response = await rawData.json();
    if (rawData.status != 200) {
      throw rawData;
    }
    return response;
  } catch (error) {
    throw error;
  }
};

const register = async payload => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JOSN.stringify(payload)
  };

  try {
    const rawData = await fetch(`${base_url}/registerDriver`, options);
    const response = await rawData.json();
    if (rawData.status != 200) {
      throw rawData;
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  login,
  register
};
