import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { compose } from "redux";
import { MovieMap } from "../../../api/db/DataTypes";
import { 
    clearEditing,
    ClearEditingFn,
    deleteMovie,
    IDeleteMovie,
    saveMovie,
    SaveMovieFn,
    setEditingField, 
    SetEditingFieldFn
} from "../../store/movies/actionCreators";
import { getActiveMovie } from "../../store/movies/selectors";
import { IState } from "../../store/State";

interface IProps extends RouteComponentProps<any, any> {
    clearEditing: ClearEditingFn,
    currentMovie?: MovieMap;
    deleteMovie: IDeleteMovie;
    saveMovie: SaveMovieFn;
    setEditingField: SetEditingFieldFn;
}

export const Edit = (props: IProps) => {
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        props.setEditingField(event.target.name, event.target.value);
    };

    const onSave = () => {
        props.saveMovie();
        props.history.push('/');
    };

    const onCancel = () => {
        props.clearEditing()
        props.history.push('/');
    };

    const onDelete = (e: any) => {
        e.preventDefault();
        if (props.currentMovie) {
            props.deleteMovie(props.currentMovie.get('id') as string);
            props.history.push('/');
        }
    };

    return (
        <form>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                name="title"
                placeholder={props.currentMovie && props.currentMovie.get('title') as string}
                onChange={onChange}
            />
            <label htmlFor="actors">Actor:</label>
            <input
                type="text"
                name="actors"
                placeholder={props.currentMovie && props.currentMovie.get('actors') as string}
                onChange={onChange}
            />
            <label htmlFor="genre">Genre:</label>
            <input
                type="text"
                name="genre"
                placeholder={props.currentMovie && props.currentMovie.get('genre') as string}
                onChange={onChange}
            />
            <label htmlFor="rating">Rating:</label>
            <input
                type="number"
                name="rating"
                placeholder={props.currentMovie && props.currentMovie.get('rating') as string}
                onChange={onChange}
            />
            <label htmlFor="year">Year:</label>
            <input
                type="number"
                name="year"
                placeholder={props.currentMovie && props.currentMovie.get('year') as string}
                onChange={onChange}
            />
            <button onClick={onSave}>Save & Return</button>
            <button onClick={onCancel}>Cancel</button>
            <button onClick={onDelete}>Delete</button>
        </form>
    );
}

const mapStateToProps = (state: IState): {} => ({
    currentMovie: getActiveMovie(state),
});

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({ clearEditing, deleteMovie, saveMovie, setEditingField }, dispatch)
);

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Edit as any);
