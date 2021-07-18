import {TCallsState} from "../../interfaces";
import {TCallHistoryReducerProps} from "../types";
import {PayloadAction} from "@reduxjs/toolkit";

export const callHistoryReducerInitial: TCallHistoryReducerProps = [];

export const callHistoryReducerMethods = {
   addCall(state: TCallsState, payload: PayloadAction<string>): void {
       const date = new Date();

       state.history.push({
           number: payload.payload,
           time: `${ date.getHours() }:${ date.getMinutes() }`
       })
   }
}
