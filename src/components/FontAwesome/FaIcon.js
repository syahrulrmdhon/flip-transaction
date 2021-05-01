import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FaIcon = (props) => {
  const { icon: iconString, ...faProps } = props;
  const icon = iconString.split(" ");
  return (
    <FontAwesomeIcon
      className={props.className}
      id={props.id}
      icon={icon}
      {...faProps}
    />
  );
}
export default FaIcon;
