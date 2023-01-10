import { atom } from "recoil";

export const todoChecksState = atom({
    key: 'todoChecksState',
    default: [false, false, false, false],
});