const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
      //host: "smtp.mailtrap.io",cambio datos(de Mailtarp por los de hotmail /SMTP)
      host: "smtp.office365.com",
      //port: 2525, antiguo mailtrap. por los nuevos de hotmail
      port:  587,
      auth: {
        user: "ceciliojose2@hotmail.com",
       // pass: "46b3500fd4f1ef" antiguo Mailtrap
       pass: "uqmbfustkizhgtcu"
      }
    });
    const mensaje={
        from: "Colibrishop 22 Store <ceciliojose2@hotmail.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;