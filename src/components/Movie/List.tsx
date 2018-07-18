import * as React from "react";
import { connect } from "react-redux";
import { MovieList } from "../../../api/db/DataTypes";
import { getList } from "../../store/movies/selectors";
import { IState } from "../../store/State";
import { ListItem } from "./ListItem";

interface IProps {
    list: MovieList;
}

export const List = (props: IProps) => (
    <section>
        <h1>Movie List</h1>
        {props.list.map(ListItem)}
    </section>
);

const mapStateToProps = (state: IState): IProps => ({
    list: getList(state),
});

export default connect(mapStateToProps, null)(List);
