import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import { Link } from 'react-router-dom';
// import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Loading from "Components/Loading";

const Container = styled.div`
  padding: 0px 10px;
`;

const Item = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:space-between;
`;

const Links = styled(Link)`
    margin:0.2rem;
    color:#ff4757;
    overflow: hidden;
    text-overflow:ellipsis;
    display:inline-block;
`;
const OpenDays = styled.span`
    display:flex;
    float:left;
`;

const HomePresenter = ({ getPopular, upComing, topRated, tvtopRated, getLatest, today, error, loading }) => loading ? (
    <Loading />
) : (
        <Container>
            {upComing && upComing.length > 0 && (
                <Section title="개봉 예정 영화">
                    {upComing.map(movie =>
                        <div key={movie.id}>
                            <strong style={{ fontSize: "1.3rem" }}>
                                <Links key={movie.id} to={`movie/${movie.id}`}>
                                    {movie.title.length > 10 ? movie.title.substring(0, 10) + "..." : movie.title}
                                </Links>
                            </strong>
                            <span>
                                {movie.release_date}
                            </span>
                        </div>)}
                </Section>
            )}
            {getPopular && getPopular.length > 0 && (
                <Section title="인기 영화">
                    {getPopular.map(movie =>
                        <div style={{ fontSize: "1.3rem" }} key={movie.id}>
                            <Links key={movie.id} to={`movie/${movie.id}`}>
                                {movie.title.length > 10 ? movie.title.substring(0, 10) + "..." : movie.title}
                            </Links>
                            <span>
                                {movie.release_date}
                            </span>
                        </div>)}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title="평점 높은 영화">
                    <Item>
                        {topRated.map(movie => (
                            <>
                                <Links key={movie.id} to={`movie/${movie.id}`}>
                                    {movie.title.length > 10 ? movie.title.substring(0, 10) + "..." : movie.title}
                                </Links>
                                < OpenDays >
                                    {movie.release_date}
                                </OpenDays>
                            </>
                        ))}
                    </Item>
                </Section>
            )}
            {
                tvtopRated && tvtopRated.length > 0 && (
                    <Section title="평점 높은 TV">
                        <Item>
                            {tvtopRated.map(tv =>
                                <>
                                    <Links key={tv.id} to={`tv/${tv.id}`}>
                                        {tv.name.length > 10 ? tv.name.substring(0, 10) + "..." : tv.name}
                                    </Links>
                                    < OpenDays >
                                        {tv.first_air_date}
                                    </OpenDays>
                                </>
                            )}
                        </Item>
                    </Section>
                )
            }
            {
                getLatest && getLatest.length > 0 && (
                    <Section title="sdf">
                        {getLatest.map(tv => (
                            <>
                                {tv.name.length > 10 ? tv.name.substring(0, 10) + "..." : tv.name}
                                < OpenDays >
                                    {tv.first_air_date}
                                </OpenDays>
                            </>
                        )
                        )}
                    </Section>
                )
            }
            {
                today && today.length > 0 && (
                    <Section title="오늘 방영 tv">
                        <Item>
                            {today.map(tv => {
                                return (
                                    <>
                                        <Links key={tv.id} to={`tv/${tv.id}`}>
                                            {tv.name.length > 10 ? tv.name.substring(0, 10) + "..." : tv.name}
                                        </Links>
                                        < OpenDays >
                                            {tv.first_air_date}
                                        </OpenDays>
                                    </>
                                )
                            })}
                        </Item>
                    </Section>
                )
            }
        </Container >
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