import { useEffect } from "react";
import useNoteStore from "../stores/noteStore";
import { fetchDeleteNote } from "../apis/noteApi";
import { toast } from "react-toastify";
import NoteItem from "../components/note/NoteItem";

function NotePage() {
  const notes = useNoteStore((state) => state.notes);
  const actionFetchAllNote = useNoteStore((state) => state.actionFetchAllNote);

  useEffect(() => {
    actionFetchAllNote();
  }, []);

  console.log("notes", notes);

  const handleDelete = async (id) => {
    try {
      //api
      fetchDeleteNote(id);
      toast.success("Delete Success");

      // fetch
      actionFetchAllNote();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="space-y-6">
      {notes.map((item) => (
        <NoteItem handleDelete={handleDelete} key={item.id} item={item} />
      ))}
    </div>
  );
}
export default NotePage;
