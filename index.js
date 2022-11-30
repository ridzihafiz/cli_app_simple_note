import inquirer from "inquirer";
import login_view from "./views/login.js";
import register_view from "./views/register.js";

const play = () => {
  console.clear();
  console.log(`
=====================
 SIMPLE NOTE APP CLI
=====================
  `);

  inquirer
    .prompt([
      {
        name: "menu",
        message: "Masukkan pilihan: ",
        type: "list",
        choices: ["register", "login", "exit"],
      },
    ])
    .then((ans) => {
      switch (ans.menu) {
        case "register":
          return register_view();

        case "login":
          return login_view();

        default:
          console.log("terimakasih...");
      }
    });
};

play();
