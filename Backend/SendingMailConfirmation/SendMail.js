var nodemailer = require("nodemailer");
const router = require("express").Router();

router.post("/SendMail", (req, res) => {
  const Email = req.body.Email;
  const ProduitCommander = req.body.ProduitCommander;
  const QuantiteCommander = req.body.QuantiteCommander;
  const MarqueDesProduits = req.body.MarqueDesProduits;
  
  


  var transporter = nodemailer.createTransport({
    service: "gmail",
//    secure: false, // use SSL , the port should be 465 for SSL connection or 587 for TLS.

    auth: {
      // Les identifiants du gmail avec lequelle on envoie le message de confirmation
      user: "*************@gmail.com",
      pass: "************",
    },
  });

  var mailOptions = {
    from: "E-commerce email <**************@gmail.com>",
    to: Email,
    subject: "Your order has been confirmed",
    text: " Bonjour, Votre commande a bien été prise en charge. Vous recevrez votre colis bientot.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.json({ Msg: false });
    } else {
      console.log("Email sent: " + info.response);
	res.json({ Msg: true });
    }
  });

});

module.exports = router;
