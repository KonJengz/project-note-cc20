import { useState } from "react";
import InputForm from "../form/InputForm";
import { schemaNote } from "../../validate/schemaNote";
import { fetchUpdateNote } from "../../apis/noteApi";
import { toast } from "react-toastify";
import useNoteStore from "../../stores/noteStore";
import { useEffect } from "react";

const initialInput = {
  note: "",
  detail: "",
};

function NoteItem({ item, handleDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  const [input, setInput] = useState({
    note: item.note || "",
    detail: item.detail || "",
  });

  //   const [inputError, setInputError] = useState(initialInput);
  //   const [isLoading, setIsLoading] = useState(false);

  //   const actionFetchUpdate = useNoteStore((state) => state.actionFetchUpdate);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    // setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleClickSave = async (id) => {
    try {
      setIsEdit(false);
      console.log("input", input);

      //validate
      await schemaNote.validate(input, { abortEarly: false });

      //api
      await fetchUpdateNote(id, input);

      toast.success("update success");
      //   await actionFetchAllNote();
    } catch (error) {
      console.log(error);
    }
  };

  //   useEffect(() => {
  //     setInput({
  //       note: item.note || "",
  //       detail: item.detail || "",
  //     });
  //   }, [item]);

  return (
    <div>
      {isEdit ? (
        <InputForm handleChange={handleChange} name="note" value={input.note} />
      ) : (
        <h1 className="text-2xl">{item.note}</h1>
      )}

      <p>{item.detail}</p>

      <div className="space-x-2">
        {isEdit ? (
          <button
            onClick={() => handleClickSave(item.id)}
            className="px-4 py-2 bg-amber-700 rounded-xl cursor-pointer hover:underline text-white"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="px-4 py-2 bg-amber-700 rounded-xl cursor-pointer hover:underline text-white"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => handleDelete(item.id)}
          className="px-4 py-2 bg-amber-700 rounded-xl cursor-pointer hover:underline text-white"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default NoteItem;
