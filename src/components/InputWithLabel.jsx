const InputWithLabel = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  isOptional = false,
  labelColor = "text-purple-600",
}) => (
  <div className="mb-4 relative">
    <label
      htmlFor={id}
      className={`absolute -top-2.5 left-2.5 text-xs ${labelColor} bg-white px-1`}
    >
      {label}
      {!isOptional && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm"
    />
  </div>
);
export default InputWithLabel;
