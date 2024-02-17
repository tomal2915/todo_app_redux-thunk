import { added, allcompleted, clearcompleted } from "../../redux/todos/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(added(input));
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
        <img src="./src/assets/notes.png" className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          value={input}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./src/assets/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer" onClick={completeAll}>
          <img
            className="w-4 h-4"
            src="./src/assets/double-tick.png"
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
