import React from 'react';
import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Sort = () => {
  const [activePopup, setActivePopup] = useState(false);
  const sort = useSelector((state) => state.filter.sort);
  const sortElement = useRef(null);
  const sortTypes = [
    { name: 'By name Asc', nameProp: 'name' },
    { name: 'By name DESC', nameProp: '-name' },
    { name: 'By price ASC', nameProp: 'price' },
    { name: 'By price DESC', nameProp: '-price' },
  ];
  return (
    <div className="sort" ref={sortElement} onClick={() => setActivePopup(!activePopup)}>
      <div className="sort__label">
        Sort by: <span className="sort__current">{sort.name}</span>
      </div>
      {activePopup && (
        <ul className="sort__list">
          {sortTypes.map((obj, i) => (
            <li key={obj.i} className={obj.name == sort.name ? 'activeSort' : ''}>
              {obj.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Sort;
