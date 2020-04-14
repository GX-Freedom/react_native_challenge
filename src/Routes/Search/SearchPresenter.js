import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Section from "Components/Section";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;

`;

const Form = styled.form`
    margin-bottom:50px;
    width:500px;
 `;

const Input = styled.input`
    all:unset;
    font-size:1rem;
    width:100%;

 `;

const Links = styled(Link)`
    margin:0 0.8rem 0 0;
    color:#6D214F;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1.5rem;
    
    &:hover{
        color:#ff4757;
        transition:color 0.5s ease-in-out;
    }
`;

const SearchPresenter = ({ MovieResults, tvResults, searchTerm, error, loading, handleSubmit, updateTerm }) => (
    <Container>
        <Form onSubmit={handleSubmit}>
            <Input
                placeholder="Search by Moive and TV Show  is name..." value={searchTerm} onChange={updateTerm}
            />
        </Form>
        {loading ? <Loading /> :
            <>
                {MovieResults && MovieResults.length > 0 && <Section title="영화">
                    {MovieResults.map(movie => <Links to={`movie/${movie.id}`} key={movie.id}>
                        {movie.title}
                    </Links>)}
                </Section>}
                {tvResults && tvResults.length > 0 && <Section title="Tv">
                    {tvResults.map(tv => <Links to={`tv/${tv.id}`} key={tv.id}>
                        {tv.name}
                    </Links>)}
                </Section>}
            </>
        }
    </Container>
)

SearchPresenter.propTypes = {
    MovieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
}
export default SearchPresenter;