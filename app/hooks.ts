import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

// Below is the custom Dispatch and Selector which
export const customDispatch = () => useDispatch<AppDispatch>();
export const customSelector: TypedUseSelectorHook<RootState> = useSelector;
