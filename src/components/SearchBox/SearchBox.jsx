import css from "./SearchBox.module.css";

const SearchBox = ({ searchTerm, setSearchTerm }) => {
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={css.Div}>
      <label htmlFor="">Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
