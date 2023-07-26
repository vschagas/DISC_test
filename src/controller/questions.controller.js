const question = require('../../questions/question')

const getQuestions = async (_req, res) => {
  try {
    console.log("TO AQUI >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    question.map((elem) => console.log(elem['Se quiser dar-se bem comigo...']))
    // console.log(question);
    return res.status(200).json(question);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal error' });
  }
};

module.exports = {
  getQuestions
};