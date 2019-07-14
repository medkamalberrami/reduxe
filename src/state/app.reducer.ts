import { State } from "./app.state";
import { Detail } from "../models/detail";
import { CounterActionType, CounterActions } from "./app.action";

const initialeState: State = {
  count: 0,
  title: "Super counter",
  details: []
};

export function reducer(state = initialeState, action: CounterActions) {
  console.log("in reducer" + action.type);
  switch (action.type) {
    case CounterActionType.Increment:
      return {
        ...state,
        count: state.count + action.payload,
        details: [
          ...state.details,
          <Detail>{ date: new Date(), buttonClicked: "ajout" }
        ]
      };

    case CounterActionType.Decrement:
      return {
        ...state,
        count: state.count - action.payload,
        details: [
          ...state.details,
          <Detail>{ date: new Date(), buttonClicked: "retrait" }
        ]
      };

    default:
      return state;
  }
}
