import React from 'react';
import { useState, useEffect } from 'react';

const List = () => {
  // Initialize the state
  const [list, getList] = useState([]);

  useEffect(() => {
    getListData();
  }, []);

  // Retrieves the list of items from the Express app
  const getListData = () => {
    fetch('/api/getList')
    .then(res => res.json())
    .then(list => { list })
    getList(res.data);
  }

  return (
    <div className="App">
      <h1>List of Items</h1>
      {/* Check to see if any items are found*/}
      {list.length ? (
        <div>
          {/* Render the list of items */}
          {list.map((item) => {
            return(
              <div>
                {item}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )
    }
    </div>
  );
}


export default List;