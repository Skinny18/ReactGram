import { api, requestConfig } from "../utils/config";

// Register a user
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/users/register", config);

    console.log(res);

    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
    }
  } catch (error) {
    console.log(error);
  }
};

// Logout a user
const logout = () => {
  localStorage.removeItem("user");
};

// Sign in a user
const login = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/users/login", config);

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(await res.json()));
    }
    return res.json();
  } catch (error) {
    console.log("erro", error);
  }
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
