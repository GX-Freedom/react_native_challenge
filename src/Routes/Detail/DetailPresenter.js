import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "Components/Loading";

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
`;


const DetailPresenter = ({ reasults, error, loading, result }) => loading ? <Loading />
    : (
        <Container>
            {console.log(result)}
            <Title>
                {document.location.href.split("#/")[1].split("/")[0] === "movie" ? result.title : result.name}
            </Title>
            <OpneDays>
                최근 방영: {result.release_date ? result.release_date : result.last_air_date}

            </OpneDays>
            <Genres>
                장르: {result.genres.map(x => <span key={x.id}>
                {x.name},
                    </span>)}
            </Genres>
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