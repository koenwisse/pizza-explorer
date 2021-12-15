// define a const with an object as initial state
const initialState = {
  name: "Helva",
  id: 42,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
