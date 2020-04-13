import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`;


const SearchPresenter = (MovieResults, tvResults, searchTerm, error, loading, handleSubmit) => {
    return (
        <Container>Search</Container>
    )
};

SearchPresenter.propTypes = {
    MovieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired
}
export default SearchPresenter;