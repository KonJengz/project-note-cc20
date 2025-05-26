import * as Yup from "yup";

export const schemaNote = Yup.object({
  note: Yup.string().max(100).required("Note is Required"),
  detail: Yup.string().max(400).required("detail is Required"),
});
