const router = require("express").Router();
const Verify = require("../models/verify");

const messagebird = require("messagebird")(process.env.MESSAGEBIRD_API_KEY);
router.post("/:uuid", async (req, res) => {
  const { token } = req.body;
  const verify = await Verify.findOne({ fileUuid: req.params.uuid });
  const verifyCreatedAt = new Date(verify.updatedAt);
  const secsPassed = (new Date() - verifyCreatedAt)/1000; // secs passed
  if(secsPassed > 60) {
    return res.status(400).json({description: 'Token expired'});
  }
  messagebird.verify.verify(verify.verifyId, token, function (err, response) {
    if (err) {
      console.log(err.errors[0]);
      return res.status(400).json(err.errors[0]);
    }
    return res.status(200).json({ response });
  });
});

module.exports = router;
