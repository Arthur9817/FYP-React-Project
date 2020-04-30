import React, { Component } from "react";
import { Doughnut, Chart } from "react-chartjs-2";
import { Header, Segment, Container } from "semantic-ui-react";

var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
	draw: function () {
		originalDoughnutDraw.apply(this, arguments);

		var chart = this.chart;
		var width = chart.chart.width,
			height = chart.chart.height,
			ctx = chart.chart.ctx;

		var fontSize = (height / 114).toFixed(2);
		ctx.font = fontSize + "em sans-serif";
		ctx.textBaseline = "middle";

		var text = chart.config.data.text,
			textX = Math.round((width - ctx.measureText(text).width) / 2),
			textY = height - 115;
		ctx.fillText(text, textX, textY);
	},
});

class Completeness extends Component {
	constructor() {
		super();

		this.state = {};
	}
	render() {
		return (
			<Container className="data-quality">
				<Header size="huge">Completeness of data</Header>
				<Segment>
					<Container className="DoughnutChart">
						<Doughnut
							data={{
								labels: ["Complete", "Incomplete"],
								datasets: [
									{
										data: [
											Number(this.props.data).toFixed(0),
											Number(100 - this.props.data).toFixed(0),
										],
										backgroundColor: [
											"rgba(54, 162, 235, 0.7)",
											"rgba(255, 255, 255, 0)",
										],

										borderColor: [
											"rgba(72, 127, 202, 1)",
											"rgba(72, 127, 202, 1)",
										],
										borderWidth: 1,
									},
								],
								text: Number(this.props.data).toFixed(0) + "%",
							}}
							height={264}
							options={{
								maintainAspectRatio: false,
							}}
						/>
					</Container>
				</Segment>
			</Container>
		);
	}
}

export default Completeness;
