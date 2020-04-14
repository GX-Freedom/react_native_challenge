import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
import Section from "Components/Section";

const Container = styled.div`
  padding: 0px 10px;
`;

const MoviePresernter = (nowPlaying, getPopular, upComing, topRated, getLatest, error, loading) => loading ? <Loading />
    : (
        <Container>
            <Section>
                Movie
            </Section>
        </Container>
    )

MoviePresernter.propTypes = {
    nowPlaying: PropTypes.array,
    getPopular: PropTypes.array,
    upComing: PropTypes.array,
    topRated: PropTypes.array,
    getLatest: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}
export default MoviePresernter;