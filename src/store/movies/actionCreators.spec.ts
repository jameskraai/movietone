import * as actionCreators from "./actionCreators";
import TypeKeys from "./TypeKeys";

describe("Movies Action Creators", () => {
    it("should get movies with no params", () => {
        const expected = {
            type: TypeKeys.GET_MOVIES,
        }

        expect(actionCreators.getMovies()).toEqual(expected);
    });
});
