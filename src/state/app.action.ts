import { Action } from "@ngrx/store";
import { type } from "os";

export enum CounterActionType {
  Increment = "[Counter] Increment",
  Decrement = "[Counter] Decrement"
}

export class IncrementCounter implements Action {
  type = CounterActionType.Increment;
  constructor(public payload: number) {}
}

export class DecrementCounter implements Action {
  type = CounterActionType.Decrement;
  constructor(public payload: number) {}
}

export type CounterActions = IncrementCounter | DecrementCounter;
