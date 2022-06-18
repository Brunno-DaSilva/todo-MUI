import Modal from "../Components/Modal";
import TodoList from "../Components/TodoList";

import React, { useState } from "react";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalIsOpenHandler = () => {
    setModalIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div>Navigation</div>
      <TodoList></TodoList>

      <div className="add_more_todos">
        {modalIsOpen && (
          <Modal
            modalIsOpen={modalIsOpen}
            modalIsOpenHandler={modalIsOpenHandler}
          />
        )}
        <Button
          href="#text-buttons"
          onClick={modalIsOpenHandler}
          startIcon={<AddIcon />}
        >
          Add task
        </Button>
      </div>
    </div>
  );
};

export default Home;
