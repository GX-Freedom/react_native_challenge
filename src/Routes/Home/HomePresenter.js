import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import { Link } from 'react-router-dom';
// import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Loading from "Components/Loading";
import Error from "Components/Error";
import Poster from "Components/Poster";


const Container = styled.div`
  padding: 0px 10px;
`;

const Item = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    /* flex-direction:column; */
    margin:0.7rem 0;
`;

const Links = styled(Link)`
    margin:0 0.8rem 0 0;
    color:#6D214F;
    display:flex;
    justify-content:flex-start;
    font-size:1.5rem;

    &:hover{
        color:#ff4757;
        transition:color 0.5s ease-in-out;
    }
`;

const OpenDays = styled.span`
    display:flex;
    font-size:1rem;
    margin-top:1rem;
`;

const HomePresenter = ({ getPopular, upComing, topRated, tvtopRated, getLatest, today, error, loading, test }) => loading ? (
    <Loading />
) : (
        <Container>
            {/* {test.data.results[0].title} */}
            {/* {console.log(upComing)} */}
            {upComing && upComing.length > 0 && (
                <Section title={`개봉 예정 영화`}>
                    {upComing.map(movie =>
                        // <Item key={movie.id}>
                        //     <strong style={{ fontSize: "1.3rem" }}>
                        //         <Links key={movie.id} to={`movie/${movie.id}`}>
                        //             {movie.title.length > 10 ? movie.title.substring(0, 10) + "..." : movie.title}
                        //         </Links>
                        //     </strong>
                        //     <OpenDays>
                        //         {movie.release_date}
                        //     </OpenDays>
                        // </Item>
                        <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date} isMovie={true} />
                    )}
                </Section>
            )}
            {getPopular && getPopular.length > 0 && (
                <Section title="인기 영화">
                    {getPopular.map(movie =>
                        // <Item style={{ fontSize: "1.3rem" }} key={movie.id}>
                        //     <Links key={movie.id} to={`movie/${movie.id}`}>
                        //         {movie.title.length > 10 ? movie.title.substring(0, 10) + "..." : movie.title}
                        //     </Links>
                        //     <OpenDays>
                        //         {movie.release_date}
                        //     </OpenDays>
                        // </Item>
                        <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date} isMovie={true} />
                    )}
                </Section>
            )}
            {topRated && topRated.length > 0 && (
                <Section title="평점 높은 영화">
                    {topRated.map(movie => (
                        // <Item key={movie.id}>
                        //     <Links key={movie.id} to={`movie/${movie.id}`}>
                        //         {movie.title.length > 10 ? movie.title.substring(0, 10) + "..." : movie.title}
                        //     </Links>
                        //     < OpenDays >
                        //         {movie.release_date}
                        //     </OpenDays>
                        // </Item>
                        <Poster key={movie.id} id={movie.id} imageUrl={movie.poster_path} title={movie.title} rating={movie.vote_average} year={movie.release_date} isMovie={true} />
                    ))}
                </Section>
            )}
            {
                tvtopRated && tvtopRated.length > 0 && (
                    <Section title="평점 높은 TV">
                        {tvtopRated.map(tv =>
                            // <Item key={tv.id}>
                            //     <Links key={tv.id} to={`tv/${tv.id}`}>
                            //         {tv.name.length > 10 ? tv.name.substring(0, 10) + "..." : tv.name}
                            //     </Links>
                            //     < OpenDays >
                            //         {tv.first_air_date}
                            //     </OpenDays>
                            // </Item>
                            <Poster key={tv.id} id={tv.id} imageUrl={tv.poster_path} title={tv.name} rating={tv.vote_average} year={tv.first_air_date} isMovie={false} />
                        )}
                    </Section>
                )
            }
            {
                getLatest && getLatest.length > 0 && (
                    <Section title="sdf">
                        {getLatest.map(tv => (
                            // <Item key={tv.id}>
                            //     {tv.name.length > 10 ? tv.name.substring(0, 10) + "..." : tv.name}
                            //     < OpenDays >
                            //         {tv.first_air_date}
                            //     </OpenDays>
                            // </Item>
                            <Poster key={tv.id} id={tv.id} imageUrl={tv.poster_path} title={tv.name} rating={tv.vote_average} year={tv.first_air_date} isMovie={false} />
                        )
                        )}
                    </Section>
                )
            }
            {
                today && today.length > 0 && (
                    <Section title="오늘 방영 tv">
                        {today.map(tv => {
                            return (
                                // <Item key={tv.id}>
                                //     <Links key={tv.id} to={`tv/${tv.id}`}>
                                //         {tv.name.length > 10 ? tv.name.substring(0, 10) + "..." : tv.name}
                                //     </Links>
                                //     < OpenDays >
                                //         {tv.first_air_date}
                                //     </OpenDays>
                                // </Item>
                                <Poster key={tv.id} id={tv.id} imageUrl={tv.poster_path} title={tv.name} rating={tv.vote_average} year={tv.first_air_date} isMovie={false} />
                            )
                        })}
                    </Section>
                )
            }
            {error && <Error text={error} />}
        </Container >
    );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    getPopular: PropTypes.array,
    upComing: PropTypes.array,
    topRated: PropTypes.array,
    weeklyAir: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    test: PropTypes.object,
    // coins: PropTypes.object,
}
export default HomePresenter