import { useState } from "react";
import InputForm from "../components/form/InputForm";
import { schemaRegister } from "../validate/schemaRegister";
import yupValidate from "../validate/yupValidate";
import * as Yup from "yup";
// import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const initialInput = {
  email: "",
  password: "",
  confirmPassword: "",
};

function RegisterPage() {
  const [input, setInput] = useState(initialInput);
  const [inputError, setInputError] = useState(initialInput);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("input", input);
    try {
      //validate
      await schemaRegister.validate(input, { abortEarly: false });

      //api axios
      // const result = axios.post('endpoint', body)
      // const result = fetch('endpoint', {method: "POST", body: JSON.stringify(input)})

      //navigite
      navigate("/");

      //alart
      toast.success("Register Success");
    } catch (err) {
      console.log(err);
      toast.error("Register invalid");
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
      <form
        onSubmit={handleSubmit}
        className="w-2/5 border mx-auto rounded-2xl p-12 space-y-6"
      >
        <h1 className="text-3xl">Register</h1>

        <InputForm
          handleChange={handleChange}
          value={input.email}
          name="email"
          placeholder="Enter your Email"
          error={inputError.email}
        />

        <InputForm
          handleChange={handleChange}
          value={input.password}
          name="password"
          type="password"
          placeholder="Enter your password"
          error={inputError.password}
        />

        <InputForm
          handleChange={handleChange}
          value={input.confirmPassword}
          name="confirmPassword"
          placeholder="Enter your confirm Password"
          error={inputError.confirmPassword}
        />

        <button
          className="w-full py-2 bg-amber-700 text-white rounded-xl cursor-pointer hover:underline"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
export default RegisterPage;
