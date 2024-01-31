import React from "react";
import { useState, startTransition } from "react";
import DGXDropDownList from "./DGXDropDownList";
const Dropdown = ({ list, onListChange, selectedValue }) => {
  const [showList, setShowList] = useState(false);

  const hideList = () => {
    setShowList(false);
  };

  return (
    <div
      className="drop-down"
      onClick={(e) => {
        startTransition(() => setShowList(true));
      }}
    >
      <div className={`input size text color ${showList && "active"}`}>
        {selectedValue}
      </div>
      {showList && (
        <DGXDropDownList
          hideList={hideList}
          onListChange={onListChange}
          list={list}
        />
      )}
    </div>
  );
};
export default Dropdown;
