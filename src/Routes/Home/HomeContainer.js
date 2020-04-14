import React from "react";
import HomePresenter from "./HomePresenter"
import { movieApi, tvApi } from "api";

export default class extends React.Component {
    state = {
        getPopular: null,
        tvgetPopular: null,
        upComing: null,
        topRated: null,
        tvtopRated: null,
        getLatest: null,
        today: null,
        error: null,
        loading: true
    }


    async componentDidMount() {
        try {
            const { data: { results: getPopular } } = await movieApi.getPopular();
            const { data: { results: tvgetPopular } } = await tvApi.getPopular();
            const { data: { results: upComing } } = await movieApi.upComing();
            const { data: { results: topRated } } = await movieApi.topRated();
            const { data: { results: tvtopRated } } = await tvApi.topRated();
            const { data: { results: getLatest } } = await tvApi.getLatest();
            const { data: { results: today } } = await tvApi.today();
            // console.log(today);
            this.setState({
                getPopular,
                tvgetPopular,
                upComing,
                topRated,
                tvtopRated,
                getLatest,
                today
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
            getPopular,
            upComing,
            topRated,
            tvtopRated,
            getLatest,
            today,
            error,
            loading,
        } = this.state;

        return (
            <>
                <HomePresenter getPopular={getPopular} upComing={upComing} topRated={topRated} tvtopRated={tvtopRated} getLatest={getLatest} today={today} error={error} loading={loading} />
            </>
        )
    }
}