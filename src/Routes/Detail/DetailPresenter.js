import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 10px;
`;

const DetailPresenter = (reasults, error, loading) => loading ? null : (
    <Container>Detail</Container>
)

DetailPresenter.propTypes = {
    reasults: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}
export default DetailPresenter;