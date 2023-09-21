import React, { useState } from "react";
import bookCover from "./bookcover.jpg";
import Info from "./Info";
import axios from "axios";
import { useEffect } from "react";
function Description() {
  const key = "AIzaSyDQS2j-EyUvoo6EtBE3o_eRDM9VJ4CPk9M";
  const userSearch = "harry potter";
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${userSearch}&key=${key}`
      )
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book:", error);
      });
  }, []);

  console.log(book);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="desription">
      <div className="description-container">
        <div className="upper-description">
          <div className="left-description">
            <div>
              <img src={bookCover} alt="Book-Cover" />
            </div>
            <div className="book-status">
              <div>
                <select className="input-style select-style">
                  <option value="No Status">No Status</option>
                  <option value="Reading">Reading</option>
                  <option value="Will Read">Will Read</option>
                  <option value="Have Read">Have Read</option>
                </select>
              </div>
              <div>
                <i
                  onClick={handleFavorite}
                  className={
                    "fa-sharp fa-solid fa-heart " +
                    (isFavorite ? "is-favorite" : "")
                  }
                />
              </div>
            </div>
          </div>
          <div>
            <Info title="Title: " info="This is Book Title" />
            <Info title="Author: " info="This is Book Author Name" />
            <Info title="ISBN: " info="This is Book ISBN" />
            <Info title="Published: " info="This is Book Publised date" />
            <Info title="Language: " info="This is Book Language" />
            <Info title="Page Count: " info="This is Book Page Count" />
            <Info title="Genre: " info="This is Book Genre" />
          </div>
        </div>
        <div className="lower-description">
          <Info title="Abstract" className="abstract-heading" />

          <Info
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
            odio felis. Vivamus quis lacus et sapien faucibus molestie. Mauris
            feugiat, nisl eget dignissim pulvinar, tortor nisl accumsan diam, in
            fringilla neque turpis ut ex. Nam imperdiet elementum ornare. Cras
            ante dui, pulvinar congue ullamcorper ut, porttitor non massa. Sed a
            quam congue, tempus quam a, sollicitudin elit. Maecenas tristique,
            mauris ut facilisis pharetra, felis velit feugiat felis, eget
            eleifend velit enim in leo. Sed vitae est in nibh pellentesque
            faucibus at a tellus."
          />
          <Info
            info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget
            odio felis. Vivamus quis lacus et sapien faucibus molestie. Mauris
            feugiat, nisl eget dignissim pulvinar, tortor nisl accumsan diam, in
            fringilla neque turpis ut ex. Nam imperdiet elementum ornare. Cras
            ante dui, pulvinar congue ullamcorper ut, porttitor non massa. Sed a
            quam congue, tempus quam a, sollicitudin elit. Maecenas tristique,
            mauris ut facilisis pharetra, felis velit feugiat felis, eget
            eleifend velit enim in leo. Sed vitae est in nibh pellentesque
            faucibus at a tellus."
          />
        </div>
      </div>
    </div>
  );
}

export default Description;
