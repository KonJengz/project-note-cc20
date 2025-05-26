import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchAllNote } from "../apis/noteApi";

const useNoteStore = create(
  persist(
    (set) => ({
      notes: [],
      actionFetchAllNote: async () => {
        const data = await fetchAllNote();
        // console.log("data", data);
        set({ notes: data });
      },
    }),
    {
      name: "notes",
    }
  )
);

export default useNoteStore;

// persist( () => ({}), { name: "notes"})
