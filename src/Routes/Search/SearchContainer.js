import React from "react";
import SearchPresenter from "./SearchPresenter"

export default class extends React.Component {
    state = {
        MovieResults: null,
        tvResults: null,
        searchterm: "",
        error: null,
        loading: false
    }
    render() {
        const {
            MovieResults,
            tvResults,
            searchterm,
            error,
            loading,
        } = this.state;
        return (
            <SearchPresenter MovieResults={MovieResults}
                tvResults={tvResults}
                searchterm={searchterm}
                error={error}
                loading={loading} />
        )
    }
}