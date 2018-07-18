import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { MovieList, MovieMap } from "../../../api/db/DataTypes";
import { getList } from "../../store/movies/selectors";
import { IState } from "../../store/State";
import { ListItem } from "./ListItem";

interface IProps extends RouteComponentProps<any, any> {
    list: MovieList;
}

export const List = (props: IProps) => (
    <section>
        <h1>Movie List</h1>
        <ul>
            {props.list.map((movie: MovieMap, key: number) => {
                return (<ListItem key={key} movie={movie} push={props.history.push}/>);
            })}
        </ul>
    </section>
);

const mapStateToProps = (state: IState): {} => ({
    list: getList(state),
});

export default compose(withRouter, connect(mapStateToProps, null))(List);
