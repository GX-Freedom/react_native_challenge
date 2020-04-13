import React from "react";
import DetailPresenter from "./DetailPresenter"

export default class extends React.Component {
    state = {
        reasults: null,
        error: null,
        loading: true
    }
    render() {
        const {
            reasults,
            error,
            loading,
        } = this.state;
        return (
            <DetailPresenter reasults={reasults}
                error={error}
                loading={loading} />
        )
    }
}