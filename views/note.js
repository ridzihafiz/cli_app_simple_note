import inquirer from "inquirer";
import { note_create } from "../controller/note_controller.js";

const note_view = (user_id) => {
  console.clear();
  console.log(`
========================
--------ADD NOTE--------
========================
  `);

  inquirer
    .prompt([
      {
        name: "title",
        message: "Input title",
      },
      {
        name: "body",
        message: "Input text",
      },
    ])
    .then((ans) => {
      note_create(user_id, ans.title, ans.body);
    });
};

export default note_view;
