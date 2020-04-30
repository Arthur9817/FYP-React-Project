import React, { Component } from "react";
import { Icon, Popup } from "semantic-ui-react";

class InfoPopup extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	state = { open: false };

	open = () => this.setState({ open: true });
	close = () => this.setState({ open: false });

	checkContent() {
		const { number } = this.props;

		if (number === "1") {
			return (
				<p>
					<b>Score 4:</b> Normal speech process.
					<br />
					<b>Score 3:</b> Detectable speech disturbance.
					<br />
					<b>Score 2:</b> Intelligible with repeating.
					<br />
					<b>Score 1:</b> Speech combined withnon-vocal communication.
					<br />
					<b>Score 0:</b> Loss of useful speech.
				</p>
			);
		}
		if (number === "2") {
			return (
				<p>
					<b>Score 4:</b> Normal.
					<br />
					<b>Score 3:</b> Slight but definite excess of saliva in mouth; may
					have night time drooling.
					<br />
					<b>Score 2:</b> Moderately excessive saliva; may have minimal
					drooling.
					<br />
					<b>Score 1:</b> Marked excess of saliva with some drooling.
					<br />
					<b>Score 0:</b> Marked drooling.
				</p>
			);
		}
		if (number === "3") {
			return (
				<p>
					<b>Score 4:</b> Normal eating habits.
					<br />
					<b>Score 3:</b> Early eating problems – occasional choking.
					<br />
					<b>Score 2:</b> Dietary consistency changes.
					<br />
					<b>Score 1:</b> Needs supplemental tube feeding.
					<br />
					<b>Score 0:</b> NPO (nothing by mouth).
				</p>
			);
		}
		if (number === "4") {
			return (
				<p>
					<b>Score 4:</b> Normal.
					<br />
					<b>Score 3:</b> Slow or sloppy: all words are legible.
					<br />
					<b>Score 2:</b> Not all words are legible.
					<br />
					<b>Score 1:</b> No words are legible, but can still grip pen.
					<br />
					<b>Score 0:</b> Unable to grip pen.
				</p>
			);
		}
		if (number === "5a") {
			return (
				<p>
					<b>Score 4:</b> Normal.
					<br />
					<b>Score 3:</b> Somewhat slow and clumsy, but no help needed.
					<br />
					<b>Score 2:</b> Can cut most foods, although slow and clumsy; some
					help needed.
					<br />
					<b>Score 1:</b> Food must be cut by someone, but can still feed
					slowly.
					<br />
					<b>Score 0:</b> Needs to be fed.
				</p>
			);
		}
		if (number === "5b") {
			return (
				<p>
					<b>Score 4:</b> Normal.
					<br />
					<b>Score 3:</b> Clumsy, but able to perform all manipulations
					independently.
					<br />
					<b>Score 2:</b> Some help needed with closures and fasteners.
					<br />
					<b>Score 1:</b> Provides minimal assistance to caregiver.
					<br />
					<b>Score 0:</b> Unable to perform any aspect of task.
				</p>
			);
		}
		if (number === "6") {
			return (
				<p>
					<b>Score 4:</b> Normal function.
					<br />
					<b>Score 3:</b> Independent; Can complete self-care with effort or
					decreased efficiency.
					<br />
					<b>Score 2:</b> Intermittent assistance or substitute methods.
					<br />
					<b>Score 1:</b> Needs attendant for self-care.
					<br />
					<b>Score 0:</b> Total dependence.
				</p>
			);
		}
		if (number === "7") {
			return (
				<p>
					<b>Score 4:</b> Normal function.
					<br />
					<b>Score 3:</b> Somewhat slow and clumsy, but no help needed.
					<br />
					<b>Score 2:</b> Can turn alone, or adjust sheets, but with great
					difficulty.
					<br />
					<b>Score 1:</b> Can initiate, but not turn or adjust sheets alone.
					<br />
					<b>Score 0:</b> Helpless.
				</p>
			);
		}
		if (number === "8") {
			return (
				<p>
					<b>Score 4:</b> Normal.
					<br />
					<b>Score 3:</b> Early ambulation difficulties.
					<br />
					<b>Score 2:</b> Walks with assistance.
					<br />
					<b>Score 1:</b> Non-ambulatory functional movement only.
					<br />
					<b>Score 0:</b> No purposeful leg movement.
				</p>
			);
		}
		if (number === "9") {
			return (
				<p>
					<b>Score 4:</b> Normal.
					<br />
					<b>Score 3:</b> Slow.
					<br />
					<b>Score 2:</b> Mild unsteadiness or fatigue.
					<br />
					<b>Score 1:</b> Needs assistance.
					<br />
					<b>Score 0:</b> Cannot do.
				</p>
			);
		}
		if (number === "10") {
			return (
				<p>
					<b>Score 4:</b> None.
					<br />
					<b>Score 3:</b> Occurs when walking.
					<br />
					<b>Score 2:</b> Occurs with one or more of the following: eating,
					bathing, dressing.
					<br />
					<b>Score 1:</b> Occurs at rest: difficulty breathing when either
					sitting or lying.
					<br />
					<b>Score 0:</b> Significant difficulty: considering using mechanical
					respiratory support.
				</p>
			);
		}
		if (number === "11") {
			return (
				<p>
					<b>Score 4:</b> None.
					<br />
					<b>Score 3:</b> Some difficulty sleeping at night due to shortness of
					breath, does not routinely use more than two pillows.
					<br />
					<b>Score 2:</b> Needs extra pillows in order to sleep (more than two).
					<br />
					<b>Score 1:</b> Can only sleep sitting up.
					<br />
					<b>Score 0:</b> Unable to sleep without mechanical assistance.
				</p>
			);
		}
		if (number === "12") {
			return (
				<p>
					<b>BiPAP = Bilevel Positive Airway Pressure.</b>
					<br />
					<b>Score 4:</b> None.
					<br />
					<b>Score 3:</b> Intermittent use of BiPAP.
					<br />
					<b>Score 2:</b> Continuous use of BiPAP during the night.
					<br />
					<b>Score 1:</b> Continuous use of BiPAP during day.
					<br />
					<b>Score 0:</b> Invasive mechanical ventilation by intubation or
					tracheostomy.
				</p>
			);
		}
	}

	render() {
		return (
			<Popup
				trigger={<Icon name="info circle" style={{ marginLeft: 10 }} />}
				wide="very"
				content={this.checkContent(this.props.number)}
				position="right center"
				hoverable
			/>
		);
	}
}

export default InfoPopup;
