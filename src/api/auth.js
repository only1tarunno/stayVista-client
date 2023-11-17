import axiosSecure from ".";

// save user in db

export const saveUser = async (user) => {
  const currentUser = {
    email: user.email,
    role: "guest",
    status: "verified",
  };

  const { data } = await axiosSecure.put(`/users/${user?.email}`, currentUser);

  return data;
};

// ad token in datbase
export const getToken = async (email) => {
  const { data } = await axiosSecure.post("/jwt", email);
  return data;
};

// rermove token
export const clearToken = async () => {
  const { data } = await axiosSecure.get("/logout");
  return data;
};
