const generateReadMe = () => {
    console.log(questionAnswers)

    fs.writeFile('userInfo.txt', JSON.stringify(data, null, '\t'), err => {
            if (err) throw err;
        })
        .catch(err => {
            console.log("Error")
        })
}

module.exports = generateReadMe;