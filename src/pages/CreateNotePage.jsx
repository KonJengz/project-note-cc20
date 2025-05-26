import { useState } from "react";
import yupValidate from "../validate/yupValidate";
import * as Yup from "yup";
// import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Loader } from "lucide-react";
import InputForm from "../components/form/InputForm";
import { schemaNote } from "../validate/schemaNote";
import { fetchCreateNote } from "../apis/noteApi";

const initialInput = {
  note: "",
  detail: "",
};

function CreateNotePage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    setInputError((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("input", input);
    try {
      //validate
      await schemaNote.validate(input, { abortEarly: false });

      //api axios
      // const result = axios.post('endpoint', body)
      // const result = fetch('endpoint', {method: "POST", body: JSON.stringify(input)})
      await fetchCreateNote(input);

      //navigite
      navigate("/");
      setInput(initialInput);
      setInputError(initialInput);

      //alart
      toast.success("Register Success");
    } catch (err) {
      console.log(err);
      toast.error("Note invalid");
      // const objError = {}
      //   err.inner.forEach((item => (
      //     objError[item.path] = item.message
      // )))
      // setInputError(objError)

      // if( err instanceof AxiosError ) {

      // }

      if (err instanceof Yup.ValidationError) {
        const errorYup = yupValidate(err);
        setInputError(errorYup);
      }
    } finally {
      setIsLoading(false);
    }
  };

  console.log("inputError", inputError);

  return (
    <div>
      <form className="w-2/5 mx-auto space-y-4" onSubmit={handleSubmit}>
        <h1 className="text-3xl">Create Note</h1>
        <InputForm
          handleChange={handleChange}
          value={input.note}
          name="note"
          placeholder="Enter your Note"
          error={inputError.note}
        />

        <div>
          <textarea
            name="detail"
            value={input.detail}
            onChange={handleChange}
            rows={5}
            placeholder="Enter Your detail Note"
            className={`bg-gray-200 resize-none px-4 py-2 rounded-xl ${
              inputError.detail ? "outline-1 outline-red-500" : "outline-0"
            } w-full placeholder:text-sm`}
          />
          {inputError.detail && (
            <p className="text-xs text-red-500">{inputError.detail}</p>
          )}
        </div>

        <button
          disabled={isLoading}
          className="w-full flex justify-center gap-2 py-2 bg-amber-700 text-white rounded-xl cursor-pointer hover:underline"
          type="submit"
        >
          {isLoading && <Loader className="animate-spin" />}
          {isLoading ? "Loading..." : "Create Note"}
        </button>
      </form>
    </div>
  );
}
export default CreateNotePage;
