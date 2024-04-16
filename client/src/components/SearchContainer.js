import styled from "styled-components";
import { FormRow, FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useState, useMemo } from 'react';

const Form = styled.form`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

const Title = styled.h4`
  color: #333;
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const ClearButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 20px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const {
    isLoading,
    search,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilters,
    jobTypeOptions,
    statusOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch('');
    clearFilters();
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        handleChange({ name: e.target.name, value: e.target.value });
      }, 1000);
    };
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <Form>
        <Title>Search Form</Title>
        <FormGroup>
          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebounce}
          />
        </FormGroup>
        <FormGroup>
          <FormRowSelect
            labelText='Status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
        </FormGroup>
        <FormGroup>
          <FormRowSelect
            labelText='Type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
        </FormGroup>
        <FormGroup>
          <FormRowSelect
            labelText='Sort'
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
        </FormGroup>
        <ClearButton
          className='btn btn-block btn-danger'
          disabled={isLoading}
          onClick={handleSubmit}
        >
          {isLoading ? 'Please Wait...' : 'Clear Filters'}
        </ClearButton>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
