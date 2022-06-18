import TodoForm from "./TodoForm";

const Modal = ({ modalIsOpen, modalIsOpenHandler }) => {
  return (
    <div className="Modal">
      <div>Modal component</div>
      <TodoForm
        modalIsOpen={modalIsOpen}
        modalIsOpenHandler={modalIsOpenHandler}
      />
    </div>
  );
};

export default Modal;
