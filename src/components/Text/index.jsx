import React from "react";

const sizeClasses = {
  txtMontserratRomanSemiBold25: "font-montserrat font-semibold",
  txtMontserratRomanMedium15: "font-medium font-montserrat",
  txtMontserratRomanLight14: "font-light font-montserrat",
  txtMontserratRomanMedium17: "font-medium font-montserrat",
  txtMontserratRomanSemiBold13: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold35: "font-montserrat font-semibold",
  txtMontserratRomanRegular15: "font-montserrat font-normal",
  txtMontserratRomanSemiBold32: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold30: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold30Black900: "font-montserrat font-semibold",
  txtMontserratRomanBold35: "font-bold font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
