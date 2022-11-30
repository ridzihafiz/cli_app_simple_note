import inquirer from "inquirer";
import { user_register } from "../controller/user_controller.js";

const register_view = () => {
  console.clear();
  console.log(`
------------------
 R E G I S T E R
------------------
  `);

  inquirer
    .prompt([
      {
        name: "username",
        message: "Input Username",
      },
      {
        name: "password",
        message: "Input Password",
        type: "password",
      },
    ])
    .then((ans) => {
      user_register(ans.username, ans.password);
      // .then((res) => {
      //   console.clear();
      //   console.log("Successfully Registered");
      // })
      // .catch((err) => {
      //   console.clear();
      //   console.error(err);
      // });
    });
};

export default register_view;
