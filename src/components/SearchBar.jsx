import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";

function SearchBar(props) {
  // const key = " ";
  // const [userInput, setUserInput] = useState("");

  // function handleChange(e) {
  //   setUserInput(e.target.value);
  //   fetchData(e.target.value);
  // }

  // function fetchData(value) {
  //   fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=${key}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const filtered = json.items.filter((item) => {
  //         return item.volumeInfo.title
  //           .toLowerCase()
  //           .includes(value.toLowerCase());
  //       });

  //       const titles = filtered.map((item) => {
  //         return item.volumeInfo.title;
  //       });

  //       const authors = filtered.map((item) => {
  //         return item.volumeInfo.authors;
  //       });

  //       console.log(titles);
  //       props.setList(titles);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching book:", error);
  //     });
  // }

  return (
    <div className="my-search">
      <Input
        // value={userInput}
        // onChange={handleChange}
        type="text"
        placeholder="Search book/Author/ISBN"
        name="search-bar"
      />
      <Button
        name="search"
        type="submit"
        hasIcon={true}
        className="custom-button"
      />
    </div>
  );
}

export default SearchBar;
