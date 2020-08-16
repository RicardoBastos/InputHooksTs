import React from "react";

const useForm = () => {
  const [value, setValue] = React.useState<string>("");

  function onChange(e: any) {
    setValue(e === null ? "" : e.target.value);
  }

  return {
    value,
    setValue,
    onChange
  };
};

export default useForm;
