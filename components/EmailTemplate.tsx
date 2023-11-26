import { textContent } from "@/content/textContent";
import React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  subject,
  message,
}) => {
  const {
    nameTitle,
    emailTitle,
    subjectTitle,
    messageTitle,
    headerText,
    footerText,
  } = textContent.email;
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h3 style={titleStyle}>{headerText}</h3>
      </header>
      <section style={contentStyle}>
        <p style={textStyle}>
          <strong>{nameTitle}</strong> {name}
        </p>
        <p style={textStyle}>
          <strong>{emailTitle}</strong> {email}
        </p>
        <p style={textStyle}>
          <strong>{subjectTitle}</strong> {subject}
        </p>
        <p style={textStyle}>
          <strong>{messageTitle}</strong> {message}
        </p>
      </section>
      <footer style={footerStyle}>
        <p style={textStyle}>{footerText}</p>
      </footer>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  maxWidth: "600px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  background: "#fff",
  color: "#333",
};

const headerStyle: React.CSSProperties = {
  borderBottom: "1px solid #ccc",
  paddingBottom: "10px",
  marginBottom: "20px",
};

const titleStyle: React.CSSProperties = {
  color: "#007BFF",
  margin: 0,
};

const contentStyle: React.CSSProperties = {
  marginBottom: "20px",
};

const textStyle: React.CSSProperties = {
  margin: "10px 0",
};

const footerStyle: React.CSSProperties = {
  borderTop: "1px solid #ccc",
  paddingTop: "10px",
};

export default EmailTemplate;
