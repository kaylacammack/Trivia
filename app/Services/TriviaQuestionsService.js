import { appState } from "../AppState.js";
import { TriviaQuestion } from "../Models/TriviaQuestion.js";

class TriviaQuestionsService {

    async getTriviaQuestionsByDifficulty(difficulty) {
        const response = await axios.get('https://opentdb.com/api.php?amount=40&category=20&type=multiple')
        let responseData = response.data.results.filter(result => result.difficulty === difficulty)
        responseData.forEach(element => {
            let test = []
            test = element.incorrect_answers
            test.push(element.correct_answer)
            element.answers = test
        });
        appState.triviaQuestions = responseData.map(triviaData => new TriviaQuestion(triviaData))
    }
}

export const triviaQuestionsService = new TriviaQuestionsService()