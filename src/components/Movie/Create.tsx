import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { bindActionCreators } from "redux";
import { compose } from "redux";

import { 
    clearCreating,
    ClearCreatingFn,
    saveMovie,
    SaveMovieFn,
    setCreatingField,
    SetCreatingFieldFn
} from "../../store/movies/actionCreators";

interface IProps extends RouteComponentProps<any, any> {
    clearCreating: ClearCreatingFn;
    saveMovie: SaveMovieFn;
    setCreatingField: SetCreatingFieldFn;
}

export const Create = (props: IProps) => {
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        props.setCreatingField(event.target.name, event.target.value);
    };

    const onSave = () => {
        props.saveMovie();
        props.history.push('/');
    };

    const onCancel = () => {
        props.clearCreating()
        props.history.push('/');
    };

    return (
        <form>
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                name="title"
                onChange={onChange}
            />
            <label htmlFor="actors">Actor:</label>
            <input
                type="text"
                name="actors"
                onChange={onChange}
            />
            <label htmlFor="genre">Genre:</label>
            <input
                type="text"
                name="genre"
                onChange={onChange}
            />
            <label htmlFor="rating">Rating:</label>
            <input
                type="number"
                name="rating"
                onChange={onChange}
            />
            <label htmlFor="year">Year:</label>
            <input
                type="number"
                name="year"
                onChange={onChange}
            />
            <button onClick={onSave}>Save & Return</button>
            <button onClick={onCancel}>Cancel</button>
        </form>
    );
};

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({ clearCreating, saveMovie, setCreatingField }, dispatch)
);

export default compose(withRouter, connect(null, mapDispatchToProps))(Create as any);
