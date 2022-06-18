import React, { useState } from "react";

import { Button, FormControl, FilledInput } from "@mui/material";

const TodoForm = ({ addTodo, modalIsOpen, modalIsOpenHandler, ...props }) => {
  const [userInput, setUserInput] = useState("");
  const [id, setId] = useState(0);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const idGenerator = () => {
    setId(id + 1);
    return id;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: idGenerator(),
      text: userInput,
    });
    setUserInput("");
  };

  return (
    <form className="todo_form" onSubmit={handleSubmit}>
      <div className="todo_form__task_editor">
        <div className="task_editor__input">
          <div>
            <input
              className="task_editor_area__input_title"
              type="text"
              id="title"
              value={userInput}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="task_editor__textarea_description"
              aria-invalid="false"
              aria-errormessage="Description over limit"
              placeholder="Description"
              spellCheck="false"
            ></textarea>
          </div>
        </div>
        <div className="task_editor__date">
          <Button>Date</Button>
        </div>
      </div>
      <div className="todo_form__actionable">
        <Button
          variant="contained"
          style={{ backgroundColor: "lightgray", color: "#989ead" }}
        >
          Cancel
        </Button>

        {modalIsOpen && (
          <Button variant="contained" onClick={modalIsOpenHandler}>
            Add task
          </Button>
        )}
      </div>
    </form>
  );
};
export default TodoForm;
