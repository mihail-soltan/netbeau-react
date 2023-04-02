import React from 'react'
import styled from '@emotion/styled'
import { useState } from 'react';
import { debounce } from 'lodash';
import DATASET from './dataset';
import Results from './Results';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 300px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  font-size: 16px;
  margin-left: 10px;
  outline: none;
`;

const SearchButton = styled.button`
  background-color: #007bff;
  border: none;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  margin-left: 10px;
  &:hover {
    background-color: #0062cc;
  }
`;

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`
function Search() {
    const [search, setSearch] = useState("")
    const handleInputChange = debounce((event) => {
        setSearch(event.target.value);
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set("q", event.target.value);
        window.history.pushState({}, '', `${window.location.pathname}?${urlParams}`);
    }, 500);
    return (
        <AppContainer>
            <SearchBarWrapper>
                <SearchInput type="text" placeholder="Search..." onChange={handleInputChange} />
                <SearchButton onClick={() => { alert("This button is useless") }} >Search</SearchButton>
            </SearchBarWrapper>
            <Results data={DATASET} query={search} />
        </AppContainer>
    );
}

export default Search;