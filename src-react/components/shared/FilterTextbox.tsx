import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  margin-top: 5px;
`;

interface FilterTextboxProps {
  onFilterChange: (filter: string) => void;
}

const FilterTextbox: React.FC<FilterTextboxProps> = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFilter = event.target.value;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <FilterContainer>
      <form onSubmit={handleSubmit}>
        Filter:
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </form>
    </FilterContainer>
  );
};

export default FilterTextbox;
