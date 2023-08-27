
import { useState } from 'react';

export default function Sendmail() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmailData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSendEmail = async () => {
    try {
      const response = await fetch('http://localhost:3001/auth/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      console.log(data.message); // Email sent successfully
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div>
      <input
        type="email"
        name="to"
        placeholder="To"
        value={emailData.to}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={emailData.subject}
        onChange={handleInputChange}
      />
      <textarea
        name="content"
        placeholder="Content"
        value={emailData.content}
        onChange={handleInputChange}
      />
      <button onClick={handleSendEmail}>Send Email</button>
    </div>
  );
}
