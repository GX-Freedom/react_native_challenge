import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loading from "Components/Loading";

const Container = styled.div`
  padding: 0px 10px;
`;

const TVPresenter = ({ getPopular, today, weeklyAir, upComing, topRated, error, loading }) => loading ? <Loading />
    : (
        <Container>
            <Section>
            </Section>TV
        </Container>
    )

TVPresenter.propTypes = {
    getPopular: PropTypes.array,
    today: PropTypes.array,
    weeklyAir: PropTypes.array,
    upComing: PropTypes.array,
    topRated: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}
export default TVPresenter;