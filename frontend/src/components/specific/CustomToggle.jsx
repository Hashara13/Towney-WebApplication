import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const CustomToggle = React.forwardRef(({ onClick }, ref) => (
  <FaUserCircle
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    className="text-gray-500 hover:text-gray-900 text-4xl cursor-pointer"
  />
));

export default CustomToggle;
