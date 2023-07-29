const nodemailer = require('nodemailer');

// Create a transporter object with your email provider configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'emailtester.bor@gmail.com', // Replace with your email address
        pass: 'borheneTest123', // Replace with your email password or app password
    },
});

// Email details
const mailOptions = {
    from: 'emailtester.bor@gmail.com', // Replace with existing email address
    to: 'borheneddinebenatti@gmail.com', // Replace with the recipient's email address
    subject: 'Test Email from Node.js',
    text: 'This is a test email sent from Node.js using nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});
