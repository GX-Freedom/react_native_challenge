import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loading from "Components/Loading";
import { Link } from 'react-router-dom';

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

const Name = styled.div`
    margin:0.3rem 0.5rem;
  
`;

const Links = styled(Link)`
    color:#6D214F;
    &:hover{
        color:#F97F51;
        transition:color 0.5s linear;
    }
    font-size:1.5rem;
`;

const OpenDays = styled.span`
    display:flex;
    font-size:1rem;
    margin-top:1rem;
`;

const TVPresenter = ({ getPopular, today, weeklyAir, topRated, getLatest, error, loading }) => loading ? <Loading />
    : (
        <Container>
            <Section title="tv 인기 순위">
                {getPopular.map(tv =>
                    <Item key={tv.id}>
                        <Name>
                            <Links to={`tv/${tv.id}`}>
                                {tv.name.length > 15 ? tv.name.substring(0, 15) + "..." : tv.name}
                            </Links>
                        </Name>
                        <OpenDays>
                            {tv.first_air_date}
                        </OpenDays>
                    </Item>
                )}
            </Section>
            <Section title="tv 오늘 방영">
                {today.map(tv =>
                    <Item key={tv.id}>
                        <Name>
                            <Links to={`tv/${tv.id}`}>
                                {tv.name.length > 15 ? tv.name.substring(0, 15) + "..." : tv.name}
                            </Links>
                        </Name>
                        <OpenDays>
                            {tv.first_air_date}
                        </OpenDays>
                    </Item>
                )}
            </Section>
            <Section title="tv 금주 방영 목록">
                {weeklyAir.map(tv =>
                    <Item key={tv.id}>
                        <Name>
                            <Links to={`tv/${tv.id}`}>
                                {tv.name.length > 15 ? tv.name.substring(0, 15) + "..." : tv.name}
                            </Links>
                        </Name>
                        <OpenDays>
                            {tv.first_air_date}
                        </OpenDays>
                    </Item>
                )}
            </Section>
            <Section title="tv 평점 높은 순서">
                {topRated.map(tv =>
                    <Item key={tv.id}>
                        <Name>
                            <Links to={`tv/${tv.id}`}>
                                {tv.name.length > 15 ? tv.name.substring(0, 15) + "..." : tv.name}
                            </Links>
                        </Name>
                        <OpenDays>
                            {tv.first_air_date}
                        </OpenDays>
                    </Item>
                )}
            </Section>
            <Section title="tv 제작 예정 작품">
                {getLatest.length > 1 ? getLatest.map(tv =>
                    <Item key={tv.id}>
                        <Name>
                            <Links to={`tv/${tv.id}`}>
                                {tv.name.length > 15 ? tv.name.substring(0, 15) + "..." : tv.name}
                            </Links>
                        </Name>
                        <OpenDays>
                            {tv.first_air_date}
                        </OpenDays>
                    </Item>
                ) : (<Item key={getLatest.id}>
                    <Name>
                        <Links to={`tv/${getLatest.id}`}>
                            {getLatest.name.length > 15 ? getLatest.name.substring(0, 15) + "..." : getLatest.name}
                        </Links>
                    </Name>
                    <OpenDays>
                        {getLatest.first_air_date}
                    </OpenDays>
                </Item>)}
            </Section>
        </Container>
    )

TVPresenter.propTypes = {
    getPopular: PropTypes.array,
    today: PropTypes.array,
    weeklyAir: PropTypes.array,
    topRated: PropTypes.array,
    getLatest: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}
export default TVPresenter;