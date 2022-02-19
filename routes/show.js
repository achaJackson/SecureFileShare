const router = require("express").Router();
const File = require("../models/file");
const Verify = require("../models/verify");
const messagebird = require("messagebird")(process.env.MESSAGEBIRD_API_KEY);

router.get("/:uuid", async (req, res) => {
  try {
    const file = await File.findOne({ uuid: req.params.uuid });
    // Link expired
    if (!file) {
      return res.render("download", { error: "Link has been expired." });
    }
    const params = {
      //sender's number
      originator: "+112064086195",
      type: "sms",
    };
    messagebird.verify.create(
      file.phoneNumber,
      params,
      async function (err, response) {
        if (err) {
          console.log(err);
          return res.render("download", { error: "Something went wrong." });
        }
        console.log(response);
        await Verify.create({
          fileId: file._id,
          verifyId: 1111, // response.id,
          fileUuid: file.uuid,
        });
        return res.render("download", {
          uuid: file.uuid,
          phoneNumber: file.phoneNumber,
          fileName: file.filename,
          fileSize: file.size,
          downloadLink: `${process.env.APP_BASE_URL}/files/download/${file.uuid}`,
          verifyLink: `${process.env.APP_BASE_URL}/files/verify/${file.uuid}`,
        });
      }
    );
  } catch (err) {
    return res.render("download", { error: "Something went wrong." });
  }
});

module.exports = router;
