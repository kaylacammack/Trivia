import { appState } from "../AppState.js";
import { triviaQuestionsService } from "../Services/TriviaQuestionsService.js";
import { setHTML } from "../Utils/Writer.js";

export class TriviaQuestionsController {
    constructor() {
        appState.on('triviaQuestions', _drawQuestion)
    }
    
    async getQuestionsByDifficulty(difficulty) {
        await triviaQuestionsService.getTriviaQuestionsByDifficulty(difficulty)
    }
}

function _drawQuestion() {
    let randomQuestion = appState.triviaQuestions
    console.log(appState.triviaQuestions)
    randomQuestion = randomQuestion[Math.floor(Math.random() * randomQuestion.length)]
    setHTML('app', randomQuestion.TriviaQuestionTemplate)
}