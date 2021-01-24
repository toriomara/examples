import {reducer, TOGGLE_COLLAPSED} from "./reducer";

test("Collapsed should be true", () => {
    // DATA
    const state: StateType = {
        collapsed: false
    }

    // Action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //EXPECT
    expect(newState.collapsed).toBe(true)
})

test("Collapsed should be false", () => {
    // DATA
    const state: StateType = {
        collapsed: true
    }

    // Action
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //EXPECT
    expect(newState.collapsed).toBe(false)
})

test("Throw Error", () => {
    // DATA
    const state: StateType = {
        collapsed: true
    }

    // Action
    expect(() => {
        reducer(state, {type: "FAKETYPE"})
    }).toThrowError()
})