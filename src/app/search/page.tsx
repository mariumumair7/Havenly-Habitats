'use client';

import React, { useState } from 'react';

const items = [
  { id: 1, name: 'Plant Pots' },
  { id: 2, name: 'Ceramics' },
  { id: 3, name: 'Tables' },
  { id: 4, name: 'Chairs' },
  { id: 5, name: 'Crockery' },
  { id: 6, name: 'Tableware' },
  { id: 7, name: 'Cutlery' },
  { id: 8, name: 'Decor Items' },
];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const results = items.filter(item =>
      item.name.toLowerCase().includes(query)
    );
    setFilteredItems(results);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-6 text-DarkPrimary">Search Items</h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for an item..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-6"
        />

        {/* Display Results */}
        <ul className="space-y-2">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <li
                key={item.id}
                className="p-2 bg-gray-200 rounded-md text-DarkPrimary hover:bg-gray-300"
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="text-gray-500">No items found.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
