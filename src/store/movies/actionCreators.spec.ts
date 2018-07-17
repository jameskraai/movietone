import * as actionCreators from "./actionCreators";
import TypeKeys from "./TypeKeys";

describe("Movies Action Creators", () => {
    it("should get movies with params", () => {
        const expected = {
            params: {
                test: "value"
            },
            type: TypeKeys.GET_MOVIES,
        }

        expect(actionCreators.getMovies({test: "value"})).toEqual(expected);
    });
    it("should get movies with no params", () => {
        const expected = {
            type: TypeKeys.GET_MOVIES,
        }

        expect(actionCreators.getMovies()).toEqual(expected);
    });
});
