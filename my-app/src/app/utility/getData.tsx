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
  const res = await axios.get("http://localhost:5000/api/category", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  });
  return res.data;
};

const API_URL = "http://localhost:5000/api/categories";

const getFetcher = async (url: string) => {
  const res = await axios.get(url, {
    headers: { Accept: "application/json" },
  });
  return res.data;
};

export const getAllCategories = async () => {
  return getFetcher(API_URL);
};

export const getCategoryById = async (categoryId: string) => {
  return getFetcher(`${API_URL}/${categoryId}`);
};

export const createCategory = async (data: { name: string }) => {
  const res = await axios.post(API_URL, data);
  return res.data;
};

export const updateCategory = async (
  categoryId: string,
  data: { name: string }
) => {
  const res = await axios.put(`${API_URL}/${categoryId}`, data);
  return res.data;
};

export const deleteCategory = async (categoryId: string) => {
  const res = await axios.delete(`${API_URL}/${categoryId}`);
  return res.data;
};
