import React from "react";
import NumberFormat from "react-number-format";

const currencyFormat = (value) => {
  return (
    <NumberFormat
      value={value}
      displayType={"text"}
      thousandSeparator={"."}
      decimalSeparator={","}
    />
  );
};

export { currencyFormat };
