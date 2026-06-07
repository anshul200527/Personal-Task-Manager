function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="🔍 Search tasks..."
        value={searchTerm}
        onChange={(event) =>
          setSearchTerm(event.target.value)
        }
      />
    </div>
  );
}

export default SearchBar;