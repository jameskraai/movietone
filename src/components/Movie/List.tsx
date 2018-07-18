import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { bindActionCreators, compose } from "redux";
import { MovieList, MovieMap } from "../../../api/db/DataTypes";
import { ISetActiveMovie, setActiveMovie } from "../../store/movies/actionCreators";
import { getList } from "../../store/movies/selectors";
import { IState } from "../../store/State";
import { ListItem } from "./ListItem";

interface IProps extends RouteComponentProps<any, any> {
    list: MovieList;
    setActiveMovie: ISetActiveMovie;
}

export const List = (props: IProps) => (
    <section>
        <h1>Movie List</h1>
        <ul>
            {props.list.map((movie: MovieMap, key: number) => {
                return (
                 <ListItem
                        key={key}
                        movie={movie}
                        push={props.history.push}
                        setActiveMovie={props.setActiveMovie} 
                    />
                );
            })}
        </ul>
    </section>
);

const mapStateToProps = (state: IState): {} => ({
    list: getList(state),
});

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({ setActiveMovie }, dispatch)
);

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(List as any);
