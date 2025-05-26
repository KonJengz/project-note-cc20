import { useEffect } from "react";
import useNoteStore from "../stores/noteStore";

function NotePage() {
  const notes = useNoteStore((state) => state.notes);
  const actionFetchAllNote = useNoteStore((state) => state.actionFetchAllNote);

  useEffect(() => {
    actionFetchAllNote();
  }, []);

  console.log("notes", notes);

  return (
    <div className="space-y-6">
      {notes.map((item) => (
        <div key={item.id}>
          <h1 className="text-2xl">{item.note}</h1>
          <p>{item.detail}</p>

          <div className="space-x-2">
            <button className="px-4 py-2 bg-amber-700 rounded-xl cursor-pointer hover:underline text-white">
              Edit
            </button>
            <button className="px-4 py-2 bg-amber-700 rounded-xl cursor-pointer hover:underline text-white">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default NotePage;
