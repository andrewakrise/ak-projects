// ./controllers/contactUsEmailController:
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.contactUsEmail = async (req, res) => {
  try {
    const { formData } = req.body;
    if (!formData) {
      return res.status(400).json({ msg: "Sending Data is required" });
    }

    const senderEmailLower = formData.email.toLowerCase();
    const senderName = formData.name;

    const welcomeMailOptions = {
      from: `"${senderName}" <${process.env.EMAIL_USER}>`,
      replyTo: senderEmailLower,
      to: process.env.EMAIL_USER,
      subject: `Contact Us Email from AK Projects: ${formData.subject}`,
      text: `Dear Admin,

${formData.message}

Thank you for your time,
AK Projects web app`,
    };

    transporter.sendMail(welcomeMailOptions, (err, info) => {
      if (err) {
        console.error("Email send error:", err);
        return res.status(500).json({
          msg: `Failed to send contact us email, error: ${err.message}`,
        });
      }
      res.status(201).json({ msg: "Contact us email sent successfully" });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: `Server error: ${err.message}` });
  }
};
