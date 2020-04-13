import React from "react";
import TVPresenter from "./TVPresenter"

export default class extends React.Component {
    state = {
        getPopular: null,
        today: null,
        weeklyAir: null,
        upComing: null,
        topRated: null,
        error: null,
        loading: true
    }
    render() {
        const {
            getPopular,
            today,
            weeklyAir,
            upComing,
            topRated,
            error,
            loading,
        } = this.state;
        return (
            <TVPresenter getPopular={getPopular}
                today={today}
                weeklyAir={weeklyAir}
                upComing={upComing}
                topRated={topRated}
                error={error}
                loading={loading} />
        )
    }
}