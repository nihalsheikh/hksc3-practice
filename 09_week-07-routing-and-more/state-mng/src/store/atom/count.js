import { atom, selector } from "recoil";

export const countAtom = atom({
  key: "countAtom", // unique name
  default: 0, // value
});

export const evenSelector = selector({
  key: "evenSelector", // name
  // get is a function
  get: (get) => {
    const count = get(countAtom);
    return count % 2;
  },
});
