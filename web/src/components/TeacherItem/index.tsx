import React from "react";

import "./styles.css";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface ITeacherProps {
  id: number;
  subject: string;
  cost: string;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface ITeacherItemProps {
  teacher: ITeacherProps;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", { user_id: teacher.id });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>
      <footer>
        <p>
          Preço/hora
          <strong>R${teacher.cost}</strong>
        </p>
        <a
          onClick={createNewConnection}
          target="_BLANK"
          rel="noopener noreferrer"
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
