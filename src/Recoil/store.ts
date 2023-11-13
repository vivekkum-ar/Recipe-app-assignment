import { atom } from "recoil";

export const searchTermState = atom({
    key: 'searchTerm', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});