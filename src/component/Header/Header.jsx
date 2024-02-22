import NotesImg from "../../assets/notes.png";
import PlusImg from "../../assets/plus.png";
import DoubleTickImg from "../../assets/double-tick.png";
import { allcompleted, clearcompleted } from "../../redux/todos/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import addTodo from "../../redux/todos/thunk/addTodo";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  const completeAll = () => {
    dispatch(allcompleted());
  };

  const clearAllComplete = () => {
    dispatch(clearcompleted());
  };

  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <img src={NotesImg} className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-no-repeat bg-contain`}
          style={{ backgroundImage: `url(${PlusImg})` }}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeAll}>
          <img
            className="w-4 h-4"
            src={DoubleTickImg}
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearAllComplete}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
