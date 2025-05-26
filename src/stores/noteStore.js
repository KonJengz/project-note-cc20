import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchAllNote, fetchUpdateNote } from "../apis/noteApi";

const useNoteStore = create(
  persist(
    (set) => ({
      notes: [],
      note: null,
      actionFetchAllNote: async () => {
        const data = await fetchAllNote();
        // console.log("data", data);
        set({ notes: data });
      },
      actionFetchUpdate: async (id, input) => {
        fetchUpdateNote(id, input);
      },
    }),
    {
      name: "note-store",
      partialize(state) {
        return {
          note: state.note,
        };
      },
    }
  )
);

export default useNoteStore;

// persist( () => ({}), { name: "notes"})
