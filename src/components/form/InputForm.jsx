function InputForm(props) {
  const {
    handleChange,
    error,
    value,
    name,
    placeholder,
    type = "text",
  } = props;
  return (
    <div className="space-y-2">
      <input
        onChange={handleChange}
        value={value}
        name={name}
        className={`bg-gray-200 px-4 py-2 rounded-xl ${
          error ? "outline-1 outline-red-500" : "outline-0"
        }  placeholder:text-sm w-full`}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
export default InputForm;
