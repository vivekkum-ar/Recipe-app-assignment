import { atom } from "recoil";

export const searchTermState = atom({
    key: 'searchTerm', // unique ID (with respect to other atoms/selectors)
    default: '', // default value (aka initial value)
});
export const recipeId = atom({
    key: '0', // unique ID (with respect to other atoms/selectors)
    default: '1161745', // default value (aka initial value)
});