"use client";
import { useState } from "react";
import { EditableField } from "./EditableField";
import styles from "./profileStyles.module.css";

interface UserDetailsState {
  name: string;
  firstLastName: string;
  secondLastName: string;
  accountNumber: string;
  email: string;
  authorName: string;
}

export default function ProfileMain() {
  const [userDetails, setUserDetails] = useState<UserDetailsState>({
    name: "Jorge Miguel",
    firstLastName: "Alvarado",
    secondLastName: "Reyes",
    accountNumber: "421010301",
    email: "correo@example.com",
    authorName: "Jorge Alvarado",
  });

  const handleSave = (field: keyof UserDetailsState, value: string) => {
    setUserDetails({ ...userDetails, [field]: value });
  };

  return (
    <div className={styles.userInfo}>
      <EditableField
        label="Nombre(s)"
        value={userDetails.name}
        onSave={(value) => handleSave("name", value)}
      />
      <EditableField
        label="Apellido Paterno"
        value={userDetails.firstLastName}
        onSave={(value) => handleSave("firstLastName", value)}
      />
      <EditableField
        label="Apellido Materno"
        value={userDetails.secondLastName}
        onSave={(value) => handleSave("secondLastName", value)}
      />
      <EditableField
        label="Número de Cuenta"
        value={userDetails.accountNumber}
        onSave={(value) => handleSave("accountNumber", value)}
      />
      <EditableField
        label="Correo"
        value={userDetails.email}
        onSave={(value) => handleSave("email", value)}
      />
      <EditableField
        label="Nombre de autor"
        value={userDetails.authorName}
        onSave={(value) => handleSave("email", value)}
      />
    </div>
  );
}
