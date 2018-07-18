import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { MovieMap } from "../../../api/db/DataTypes";
import { getActiveMovie } from "../../store/movies/selectors";
import { IState } from "../../store/State";

interface IProps extends RouteComponentProps<any, any> {
    movie: MovieMap;
}

export const Edit = (props: IProps) => (
    <section>
        <h1>{props.movie.get("title")}</h1>
    </section>
);

const mapStateToProps = (state: IState): {} => ({
    movie: getActiveMovie(state),
});

export default compose(withRouter, connect(mapStateToProps, null))(Edit);
