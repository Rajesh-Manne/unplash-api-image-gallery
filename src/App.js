import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";

import SearchBar from "./components/SearchBar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Modal from "./components/Modal";
//qO9EkoChdXkbwxA-zwrN5-wvMVq5ULgp3tXLVS4YKTg

function App() {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const fetchImages = () => {
    try {
      fetch(
        `https://api.unsplash.com/search/photos/?client_id=qO9EkoChdXkbwxA-zwrN5-wvMVq5ULgp3tXLVS4YKTg&query=${value}`
      )
        .then((res) => res.json())
        .then((data) => setResults(data.results));
    } catch (error) {
      alert(error.message);
    }
  };

  const getItem = (id) => {
    const product = results.find((item) => id === item.id);
    return product;
  };
  const openModal = (id) => {
    const product = getItem(id);
    console.log(product);
    setModal(product);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchBar
              handleChange={handleChange}
              value={value}
              fetchImages={fetchImages}
              results={results}
              openModal={openModal}
            />
          </Route>
        </Switch>

        {/* <div className="container-fluid img-container">
          <div className="row">
            {results.map((image) => (
              <ImageGallery
                key={image.id}
                image={image}
                openModal={openModal}
              />
            ))}
          </div>
        </div> */}

        {results.map((image) => (
          <Modal open={open} closeModal={closeModal} modal={modal} />
        ))}
        {/* <Modal results={results} openModal={openModal} closeModal={closeModal} /> */}
      </Router>
    </div>
  );
}

export default App;
