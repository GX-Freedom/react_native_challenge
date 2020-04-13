import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";


const Container = styled.div`
  padding: 0px 10px;
`;


const HomePresenter = ({ getPopular, upComing, topRated, tvtopRated, getLatest, today, error, loading }) => loading ? null : (

    <Container>
        {upComing && upComing.length > 0 && (
            <Section title="개봉 예정 영화">
                {upComing.map(movie => movie.title)}
            </Section>
        )}
        {getPopular && getPopular.length > 0 && (
            <Section title="인기 영화">
                {getPopular.map(movie => movie.title)}
            </Section>
        )}
        {topRated && topRated.length > 0 && (
            <Section title="평점 높은 영화">
                {topRated.map(movie => movie.title)}
            </Section>
        )}
        {tvtopRated && tvtopRated.length > 0 && (
            <Section title="평점 높은 TV">
                {tvtopRated.map(tv => tv.name)}
            </Section>
        )}
        {getLatest && getLatest.length > 0 && (
            <Section title="sdf">
                {getLatest.map(tv => tv.name)}
            </Section>
        )}
        {today && today.length > 0 && (
            <Section title="오늘 방영 tv">
                {today.map(tv => tv.name)}
            </Section>
        )}
    </Container>
);

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    getPopular: PropTypes.array,
    upComing: PropTypes.array,
    topRated: PropTypes.array,
    weeklyAir: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}
export default HomePresenter