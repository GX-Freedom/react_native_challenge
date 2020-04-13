import React from "react";
import MoviePresenter from "./MoviePresenter"

export default class extends React.Component {
    state = {
        nowPlaying: null,
        getPopular: null,
        upComing: null,
        topRated: null,
        error: null,
        loading: true
    }
    render() {
        const {
            nowPlaying,
            getPopular,
            upComing,
            topRated,
            error,
            loading,
        } = this.state;
        return (
            <MoviePresenter nowPlaying={nowPlaying}
                getPopular={getPopular}
                upComing={upComing}
                topRated={topRated}
                error={error}
                loading={loading} />
        )
    }
}