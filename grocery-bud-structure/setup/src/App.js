import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return( list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value here ..");
    } else if (name && isEditing) {
      setList(
        list.map((oneItem) => {
          if (oneItem.id === editId) {
            return { ...oneItem, title: name };
          }
          return oneItem;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added in list");
      const newitem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newitem]);
      setName("");
    }
  };
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "Empty list !");
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed.");
    setList(list.filter((oneItem) => oneItem.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((oneItem) => oneItem.id === id);
    setIsEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list" , JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} hideAlert={showAlert} list={list} />}
        <h3>Grocery-bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="example: Eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List item={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn " onClick={clearList}>
            clear list
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
