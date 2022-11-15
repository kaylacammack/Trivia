import { TriviaQuestionsController } from "./Controllers/TriviaQuestionsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
//   valuesController = new ValuesController();
  triviaQuestionsController = new TriviaQuestionsController();
}

window["app"] = new App();
