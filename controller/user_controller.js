import conn from "../prisma/connection.js";
import note_view from "../views/note.js";

export const user_register = (username, password) => {
  conn.users
    .create({
      data: {
        username: username,
        password: password,
      },
    })
    .then((res) => {
      console.clear();
      console.log("Successfull registered 😍");
    })
    .catch((err) => {
      console.clear();
      console.log("Register is failed");
    });
};

export const user_login = async (username, password) => {
  // cari data user berdasarkan parameter username
  const findUser = await conn.users.findUnique({
    where: {
      username: username,
    },
  });

  if (!findUser) {
    return console.log("Username can't be found");
  }

  if (password != findUser.password) {
    return console.log("Wrong password");
  }

  note_view(findUser.id);
};
