import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import { FaHeart } from 'react-icons/fa';

const allCategories = ['menu complet', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'menu complet') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
    <main>
    <section className="menu section">
      <div className="title">
        <h2>Notre menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
    </main>
    <p className="footer">Codé avec <FaHeart className="heart-icon"/> par <a href="http://albanrenahy.com" target="_blank">Alban Renahy</a></p>
    </>
  );
};

export default App;
