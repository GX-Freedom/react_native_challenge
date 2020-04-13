import React from "react";
import HomePresenter from "./HomePresenter"
import { movieApi } from "../../api";

export default class extends React.Component {
    state = {
        nowPlaying: null,
        getPopular: null,
        upComing: null,
        topRated: null,
        weeklyAir: null,
        error: null,
        loading: true
    }


    async componentDidMount() {
        try {
            const { data: { results: nowPlaying } } = await movieApi.nowPlaying();
            const { data: { results: getPopular } } = await movieApi.getPopular();
            const { data: { results: upComing } } = await movieApi.upComing();
            const { data: { results: topRated } } = await movieApi.topRated();
            const { data: { results: weeklyAir } } = await movieApi.weeklyAir();
            console.log(nowPlaying);
            this.setState({
                nowPlaying,
                getPopular,
                upComing,
                topRated,
                weeklyAir
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
            weeklyAir,
            error,
            loading,
        } = this.state;
        console.log(this.state);
        return (
            <>
                <HomePresenter nowPlaying={nowPlaying} getPopular={getPopular} upComing={upComing} topRated={topRated} weeklyAir={weeklyAir} error={error} loading={loading} />
            </>
        )
    }
}