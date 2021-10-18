import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allcategories=  ['all',...new Set(items.map((oneItem)=> oneItem.category))];



function App() {
  const [menu, setMenu] = useState(items);
  const [categories, setCategories] = useState(allcategories);
  const filterItems =(category)=>{
    if (category === "all") {
      setMenu(items);
      return;
    }
    const newItems = items.filter((oneItem)=>oneItem.category===category )
    setMenu(newItems); 
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          filterItemList={filterItems}
        />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
