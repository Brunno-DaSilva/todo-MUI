import TodoForm from "./TodoForm";

const Modal = ({ modalIsOpen, modalIsOpenHandler, ...props }) => {
  return (
    <div className="Modal">
      <div>Modal component</div>
      <TodoForm
        modalIsOpen={modalIsOpen}
        modalIsOpenHandler={modalIsOpenHandler}
        {...props}
      />
    </div>
  );
};

export default Modal;
