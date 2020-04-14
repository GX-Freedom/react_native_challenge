import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";
// import { Link } from 'react-router-dom';


const Container = styled.div`
  padding: 0px 10px;
  margin-top:1rem;
`;


const Title = styled.div`
    font-size:3rem;
    font-weight:700;
`;

const OpneDays = styled.div`
    font-size:1.8rem;
    margin-top:0.7rem;
`;

const Genres = styled.div`
    font-size:1.8rem;
    margin-top:0.7rem;

`;

const Description = styled.div`
    text-align:center;
    font-size:1rem;
    font-weight:400;
    border:1px solid red;
    margin-top:0.7rem;
    background:#487eb0;
    color:black;
    flex:1;
    border-radius:10px;
    padding:5px;
    box-shadow: 0px 5px 7px 0px #3B3B98;
`;

const Average = styled.div`
    font-size:1.8rem;
    margin-top:0.7rem;
`;

// const Links = styled(Link)`
//     margin:0 0.8rem 0 0;
//     color:#6D214F;
//     display:flex;
//     justify-content:flex-start;
//     font-size:1.5rem;

//     &:hover{
//         color:#ff4757;
//         transition:color 0.5s ease-in-out;
//     }
// `;

const Asite = styled.a`
    font-size:1.3rem;
    color:#FEA47F;
    border-bottom:1px solid #F8EFBA;
    &:hover{
        color: #F97F51;
        border-bottom:1px solid #FC427B;
    }
`;
const handleClick = () => {
    alert("동영상을 찾을 수 없습니다.")
}
const DetailPresenter = ({ reasults, error, loading, result }) => loading ? <Loading />
    : (
        <Container>
            {/* {console.log(result.videos)} */}
            {/* <img src={`${result.production_companies[0].logo_path}`} alt="Image" /> */}
            <Title>
                {document.location.href.split("#/")[1].split("/")[0] === "movie" ? result.title : result.name}
                <span style={{ fontSize: "1rem" }}>
                    ({document.location.href.split("#/")[1].split("/")[0] === "movie" ? result.original_title : result.original_name})
                </span>
            </Title>
            <div style={{ margin: "1rem" }}>
                <Asite href={`https://www.youtube.com/watch?v=${result.videos.results.length > 0 ? result.videos.results[0].key : ""}`} onClick={result.videos.results.length > 0 ? null : handleClick} target="_blank">
                    영상보로 가기(youtube)
                </Asite>
            </div>
            <OpneDays>
                최근 방영: {result.release_date ? result.release_date : result.last_air_date}

            </OpneDays>
            <Genres>
                장르: {result.genres.map(x => <span key={x.id}>
                {x.name},
                    </span>)}
            </Genres>
            <Average>
                평점: {result.vote_average}
            </Average>
            <Description>
                {result.overview}
            </Description>

        </Container>
    )

DetailPresenter.propTypes = {
    reasults: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    result: PropTypes.object,

}
export default DetailPresenter;