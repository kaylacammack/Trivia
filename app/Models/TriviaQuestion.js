export class TriviaQuestion {
    constructor(data) {
        this.category = data.category
        this.correctAnswer = data.correct_answer
        this.difficulty = data.difficulty
        this.incorrectAnswers = data.incorrect_answers
        this.question = data.question
        this.type = data.type
        this.answers = data.answers
    }
    get TriviaQuestionTemplate() {
        return /*html*/`
        <h4>${this.question}</h4>
		<h4>Trivia Answers:</h4>
		<form>
			<div class="form-check">
				<input
				class="form-check-input"
				type="radio"
				name="flexRadioDefault"
				id="flexRadioDefault1"
				/>
				<label
					class="form-check-label"
					for="flexRadioDefault1"
				>
					Default radio
				</label>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault1"
				/>
				<label
					class="form-check-label"
					for="flexRadioDefault1"
				>
					Default radio
				</label>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault1"
				/>
				<label
					class="form-check-label"
					for="flexRadioDefault1"
				>
					Default radio
				</label>
			</div>
			<div class="form-check">
				<input
					class="form-check-input"
					type="radio"
					name="flexRadioDefault"
					id="flexRadioDefault1"
				/>
				<label
					abel
					class="form-check-label"
					for="flexRadioDefault1"
				>
					Default radio
				</label>
			</div>
			<button
				type="submit"
				value="Submit"
				class="btn btn-dark"
			>
				Submit Answer
			</button>
		</form>
        `
    }
    get template(){
        return '<div></div>'
    }
}