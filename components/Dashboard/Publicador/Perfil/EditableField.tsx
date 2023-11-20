"use client";
import React, { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import styles from "./profileStyles.module.css";

interface EditableFieldProps {
  label: string;
  value: string;
  onSave: (value: string) => void;
}

export const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  onSave,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleSave = () => {
    onSave(newValue);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setNewValue(value); // Revierte al valor original
    setIsEditing(false); // Cierra el modo de edición
  };

  return (
    <div className={styles.editableField}>
      {!isEditing ? (
        <>
          <span>
            {label}: <b>{value}</b>
          </span>
          <FaPencilAlt onClick={() => setIsEditing(true)} />
        </>
      ) : (
        <>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={handleSave} className={styles.save}>
            Guardar
          </button>
          <button onClick={handleCancel} className={styles.delete}>
            Cancelar
          </button>
        </>
      )}
    </div>
  );
};
