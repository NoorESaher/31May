import React, { useState } from "react";
import image from "../images/image.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const About = () => {
  let navigate = useNavigate();

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  /*Define Delete Item*/
  const deleteItem = (id) => {
    console.log(id);
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });

    setItems(updateditems);
  };
  //Remove All
  const removeAll = () => {
    setItems([]);
  };
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={image} alt="LoGo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>

          {/* Add Items*/}
          <div className="additems">
            <input
              type="text"
              placeholder="Write Items Here"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />

            <i
              className="fa solid fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>

          {/* Delete Items*/}
          <div className="showItems">
            {items.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3> {elem} </h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>

          {/* Clear All Button*/}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>Check List</span>
            </button>
          </div>

          {/*Contact Page Button */}
          <div className="newbutton">
            <Link
              className="newbutton"
              to="/Contact"
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Click please
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
