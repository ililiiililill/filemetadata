// @desc analyse file
// @route POST /api/fileanalyse
const analyseFile = (req, res) => {
  console.log(req.file);
  const name = req.file.originalname;
  const type = req.file.mimetype;
  const size = req.file.size;
  res.json({ name, type, size });
};

module.exports = { analyseFile };
