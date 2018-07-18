import { Map } from "immutable";
import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addFilter, AddFilterFn, deleteFilter, DeleteFilterFn } from "../../store/movies/actionCreators";
import { getFilters } from "../../store/movies/selectors";
import { IState as StoreState } from "../../store/State";

interface IProps {
    filters: Map<string, any>;
    addFilter: AddFilterFn;
    deleteFilter: DeleteFilterFn;
}

interface IState {
    newField: string;
    newValue: string;
}

export class Filters extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            newField: "",
            newValue: "",
        }
    }

    public render() {
        const onChange = (event: any) => {
            let newState = {};

            if (event.target.nodeName === "SELECT") {
                newState = {newField: event.target.value};
            } else {
                newState = {newValue: event.target.value};
            }

            this.setState((prevState: IState) => {
                return Object.assign({}, prevState, newState);
            })
        };

        const onApply = (e: any) => {
            e.preventDefault();
            this.props.addFilter(this.state.newField, this.state.newValue);
            this.setState({newField: "", newValue: ""});
        }

        return (
            <form>
                <label htmlFor="field">Field:</label>
                <select name="field" onChange={onChange} value={this.state.newField}>
                    <option>---select---</option>
                    <option value="title">Title</option>
                    <option value="genre">Genre</option>
                    <option value="actors">Actors</option>
                    <option value="rating">Rating</option>
                    <option value="year">Year</option>
                </select>
                <label htmlFor="value">Value:</label>
                <input type="text" name="value" onChange={onChange} value={this.state.newValue}/>
                <button disabled={!this.state.newField || !this.state.newValue} onClick={onApply}>Add Filter</button>
            </form>

        );
    }
}

const mapStateToProps = (state: StoreState) => ({
    filters: getFilters(state),
});

const mapDispatchToProps = (dispatch: any) => (
    bindActionCreators({ addFilter, deleteFilter }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Filters);