function mathQuiz(prob1 = Number(Math.floor(Math.random() * 100)), prob2 = Number(Math.floor(Math.random() * 100))) {
    let problem = prompt(`what is ${prob1} + ${prob2}`)
    let ans = prob1 + prob2;
    if (ans == problem) {
        console.log('Congratulation, you are correct.')
    } else {
        console.log('Unfortunately, you are incorrect.')
    }
}
mathQuiz()


