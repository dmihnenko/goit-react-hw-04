import toast from "react-hot-toast";
import css from "../SearchBar/SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const topic = form.elements.value.value;

    if (topic.trim() === "") {
      toast.error("Please enter search term!");
      return;
    }

    onSubmit(topic);
    form.reset();
  };

  return (
    <header>
      <form className={css.conteiner} onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="value"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}
