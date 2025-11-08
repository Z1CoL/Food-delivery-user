import axios from "axios";

export const auth = async (data: { email: string; password: string }) => {
  const res = await axios.post(
    "http://localhost:5000/api/users/register",
    data,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return res.data;
};

export const getCategories = async () => {
  const res = await axios.get(
    "http://localhost:5000/api/category",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${window.localStorage.getItem('token')}`
      },
    }
  );
  return res.data;
};