import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});

export const jobAtom = atom({
  key: "jobAtom",
  default: 0,
});

export const messageAtom = atom({
  key: "messageAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 15,
});

export const totalNotificationCountSelector = selector({
  key: "totalNotificationCount",
  get: ({ get }) => {
    return (
      get(networkAtom) + get(jobAtom) + get(messageAtom) + get(notificationAtom)
    );
  },
});
