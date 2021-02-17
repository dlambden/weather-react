import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import "../styles/PopoverPicker.css";

import useClickOutside from "./useClickOutside";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'

export const PopoverPicker = ({ color, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <FontAwesomeIcon icon={faPalette}
        className="swatch"
        style={{ color: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};
