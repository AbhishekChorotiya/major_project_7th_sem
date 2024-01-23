import React, { useState } from "react";
import styles from "./Dropdown.module.css";

const Dropdown = ({ onSelect, data }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleDropdown = (txt) => {
    onSelect(txt);
    setSelected(txt);
    setShowDropdown(false);
  };

  return (
    <div
      style={{
        borderBottomLeftRadius: showDropdown ? "0" : "5px",
        borderBottomRightRadius: showDropdown ? "0" : "5px",
      }}
      className={styles.container}
    >
      <div
        onClick={() => setShowDropdown(!showDropdown)}
        className={styles.dropdown}
      >
        <p>{selected || "select"}</p>
        <i className="fa-solid fa-angle-down" />
      </div>

      {showDropdown && (
        <div className={styles.list}>
          {data.map((item, ind) => (
            <p key={ind} onClick={() => handleDropdown(item)}>
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
