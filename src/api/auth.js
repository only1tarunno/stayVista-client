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
  console.log(data);
  return data;
};
