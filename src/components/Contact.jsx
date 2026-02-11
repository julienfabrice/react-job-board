import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    linkedin: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici on peut juste afficher une alerte pour la demo
    alert(`Merci ${formData.name}, votre message a été envoyé !`);
    setFormData({ name: "", title: "", email: "", linkedin: "", message: "" });
  };

  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <p>
        Si vous êtes recruteur ou avez une question, remplissez le formulaire ci-dessous ou contactez-moi directement :
      </p>

      <div className="contact-container">
        {/* Formulaire */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Nom
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </label>

          <label>
            Titre / Poste
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Ex: Développeur React / Fullstack"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
            />
          </label>

          <label>
            LinkedIn
            <input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="Lien vers votre profil LinkedIn"
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              required
            ></textarea>
          </label>

          <button type="submit">Envoyer</button>
        </form>

        {/* Infos directes */}
        <div className="contact-info">
          <h3>Mes informations</h3>
          <p>Julien Fabrice Menoa</p>
          <p>Email: julien.fabrice@gmail.com</p>
          <p>Téléphone: +237 697733236</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/julien-fabrice-menoa-4a1571349/" target="_blank" rel="noreferrer">Mon profil</a></p>
          <p>Poste: Développeur React / Fullstack</p>
        </div>
      </div>
    </div>
  );
}