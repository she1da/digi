import React from "react";
import { useRef, useEffect, useState } from "react";

const DropDownList = ({ list, onListChange, hideList }) => {
  const [show, setShow] = useState(true);

  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (e) => {
      if (!ref?.current?.contains(e.target)) {
        hideList();
      }
    };

    document.addEventListener("click", handleOutSideClick, false);
    return () => {
      document.removeEventListener("click", handleOutSideClick, false);
    };
  }, [hideList]);

  const handleSelectItem = (index) => {
    setShow(false);

    const selectedVal = list.find((item) => item.key === index).name;
    onListChange(selectedVal);
  };

  return (
    <>
      {show && (
        <div className="list size color" ref={ref}>
          {list.map((listItem, index) => (
            <div
              className="item size text"
              key={index}
              onClick={() => handleSelectItem(listItem.key)}
            >
              {listItem.name}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default DropDownList;
