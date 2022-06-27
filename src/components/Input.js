function Input({
    type,
    name,
    label,
    value,
    placeholder,
    onChange,
    required,
    classNameLabel = "input-label",
    classNameInput = "input",
  
  }) {
    return (
      <div>
        <label className={classNameLabel}>{label}</label>
        <input
            className={classNameInput}
            type={type}
            onChange={onChange}
            name={name}
            value={value}
            placeholder={placeholder}
            required={true}>
        </input>
      </div>
    )
  };
  
export default Input