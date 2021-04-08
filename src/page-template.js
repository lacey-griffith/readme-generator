const generateReadMe = (answers) => {
    //console.log(answers)

    fs.writeFile('userInfo.txt', JSON.stringify(data, null, '\t'), err => {
            if (err) throw err;
        })
        .catch(err => {
            console.log("Error")
        })
}

module.exports = generateReadMe;