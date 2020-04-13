import React from "react";
import MoviePresenter from "./MoviePresenter"
import { movieApi } from "api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        getPopular: null,
        upComing: null,
        topRated: null,
        getLatest: null,
        error: null,
        loading: true
    }
    async componentDidMount() {
        try {
            const { data: { results: nowPlaying } } = await movieApi.nowPlaying();
            const { data: { results: getPopular } } = await movieApi.getPopular();
            const { data: { results: upComing } } = await movieApi.upComing();
            const { data: { results: topRated } } = await movieApi.topRated();
            const { data: { results: getLatest } } = await movieApi.getLatest();
            this.setState({
                nowPlaying,
                getPopular,
                upComing,
                topRated,
                getLatest
            })
        } catch{
            this.setState({
                error: "Can Not Found."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }
    render() {
        const {
            nowPlaying,
            getPopular,
            upComing,
            topRated,
            getLatest,
            error,
            loading,
        } = this.state;

        return (
            <MoviePresenter nowPlaying={nowPlaying} getPopular={getPopular} upComing={upComing} topRated={topRated} getLatest={getLatest} error={error} loading={loading} />
        )
    }
}