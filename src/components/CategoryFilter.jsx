import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({categories, onCategoryChange}) => {
  return (
    <select
      className='w-full p-2 border rounded'
      onChange={(e) => onCategoryChange(e.target.value)}>
      <option value=''>All Categories</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
  ).isRequired,
  onCategoryChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
