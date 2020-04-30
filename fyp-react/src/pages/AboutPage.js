import React, { Component } from "react";
import {
	Grid,
	Message,
	Container,
	Header,
	List,
	Segment,
	Divider,
} from "semantic-ui-react";
import "../App.css";

class AboutPage extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<Container fluid>
				<Container fluid style={{ textAlign: "center" }}>
					<Message size="small" color="blue">
						<Header size="huge">The Prediction Model</Header>
					</Message>
				</Container>
				<Container fluid>
					<Grid columns={3} centered padded>
						<Grid.Column style={{ padding: 0, minWidth: 400 }}>
							<Segment
								size="large"
								style={{ paddingLeft: 25, borderRadius: 0, margin: 0 }}
							>
								<Header style={{ marginBottom: 5 }}>Purpose</Header>
								<p>
									Amyotrophic lateral sclerosis (ALS) is a relentlessly
									progressive, fatal motor neuron disease with a variable
									natural history. There are no accurate models that predict the
									disease course and outcomes, which complicates risk assessment
									and counselling for individual patients, stratification of
									patients for trials, and timing of interventions. This
									prediction model was aimed for predicting a composite survival
									endpoint for individual patients with ALS.
								</p>
							</Segment>
							<Segment
								size="large"
								style={{ paddingLeft: 25, borderRadius: 0, margin: 0 }}
							>
								<Header style={{ marginBottom: 5 }}>Creation</Header>
								<p>
									The prediction model was created using data that was collected
									from the largest ALS dataset in Europe between January 1st,
									1992 and September 22nd, 2016 which included data from 11,475
									patients. This data was collected from 14 specialised ALS
									centres accross Europe. It consists of clinical, cognitive and
									genetic information. The project was funded by the Netherlands
									ALS foundation.
								</p>
							</Segment>
							<Segment
								size="large"
								style={{ paddingLeft: 25, borderRadius: 0, margin: 0 }}
							>
								<Header style={{ marginBottom: 5 }}>Methods used</Header>
								<p>
									The 16 patient characteristics were assessed as potential
									predictors of a composite survival outcome. Backward
									elimination with bootstrapping was used to select these
									predictors. Data from the 14 ALS centres were combined using
									the internal–external cross-validation framework. This
									developed a model for predicting the composite survival
									endpoint in all but one centre, after which its external
									validity was evaluated in the omitted centre.
								</p>
							</Segment>
						</Grid.Column>
						<Grid.Column style={{ padding: 0, minWidth: 400 }}>
							<Segment
								size="large"
								style={{
									paddingLeft: 25,
									borderRadius: 0,
									margin: 0,
									paddingBottom: 63,
								}}
							>
								<Header style={{ marginBottom: 5 }}>Output</Header>
								<p>
									The prediction model outputs the median predicted survival
									time for a patient in months. There are five groups associated
									with the median survival times:
								</p>
								<List ordered style={{ marginTop: 10 }}>
									<List.Item>Very short (17.7 months).</List.Item>
									<List.Item>Short (25.3 months).</List.Item>
									<List.Item>Intermediate (23.3 months).</List.Item>
									<List.Item>Long (43.7 months).</List.Item>
									<List.Item>Very long (91 months).</List.Item>
								</List>
							</Segment>
							<Segment
								size="large"
								style={{ paddingLeft: 25, borderRadius: 0, margin: 0 }}
							>
								<Header style={{ marginBottom: 10 }}>
									Specialised ALS centres
								</Header>
								<List bulleted style={{ marginTop: 0 }}>
									<List.Item>Leuven, Belgium.</List.Item>
									<List.Item>Limoges, France.</List.Item>
									<List.Item>Tours, France.</List.Item>
									<List.Item>Hannover, Germany.</List.Item>
									<List.Item>Jena, Germany.</List.Item>
									<List.Item>Dublin, Ireland.</List.Item>
									<List.Item>Torino, Italy.</List.Item>
									<List.Item>Utrecht, Netherlands.</List.Item>
									<List.Item>Lisbon, Portugal.</List.Item>
									<List.Item>St Gallen, Switzerland.</List.Item>
									<List.Item>London, UK.</List.Item>
									<List.Item>Sheffield, UK.</List.Item>
									<List.Item>Oxford, UK.</List.Item>
								</List>
							</Segment>
						</Grid.Column>
						<Grid.Column style={{ padding: 0, minWidth: 400 }}>
							<Segment
								size="large"
								style={{ paddingLeft: 25, borderRadius: 0, margin: 0 }}
							>
								<Header style={{ marginBottom: 10 }}>
									Data items used in prediction model (8)
								</Header>
								<List bulleted style={{ marginTop: 0 }}>
									<List.Item>Bulbar versus non bulbar onset.</List.Item>
									<List.Item>Age at onset.</List.Item>
									<List.Item>
										Definite versus probable or possible ALS.
									</List.Item>
									<List.Item>Diagnostic delay.</List.Item>
									<List.Item>Forced vital capacity.</List.Item>
									<List.Item>Progression rate.</List.Item>
									<List.Item>Frontotemporal dementia.</List.Item>
									<List.Item>Presence of C9orf72 repeat expansion.</List.Item>
								</List>
							</Segment>
							<Segment
								size="large"
								style={{
									paddingLeft: 25,
									borderRadius: 0,
									margin: 0,
									paddingBottom: 113,
								}}
							>
								<Header style={{ marginBottom: 5 }}>
									Patient characteristics (16)
								</Header>
								<p>
									<b>Clinical:</b> sex, site at onset, age at onset, revised El
									Escorial criteria, diagnostic delay, forced vital capacity
									(FVC), progression rate defined by the slope on the revised
									ALS Functional Rating Scale (ALSFRS-R), premorbid body-mass
									index (BMI), current smoking and cigarette pack-years.
								</p>
								<p>
									<b>Cognitive:</b> presence of frontotemporal dementia, scores
									on the verbal fluency index, the Frontal Assessment Battery,
									ALS Frontotemporal Dementia Questionnaire (ALSFTD-Q)
								</p>
								<p>
									<b>Genetic:</b> presence of a C9orf72 mutation and presence of
									the minor allele homozygous genotype (C/C) of the UNC13A
									single nucleotide polymorphism.
								</p>
							</Segment>
						</Grid.Column>
					</Grid>
					<Segment
						size="large"
						style={{ paddingLeft: 25, borderRadius: 0, margin: 0 }}
					>
						<Header style={{ marginBottom: 5 }}>
							Differences between ALS data registers
						</Header>
						<List ordered style={{ marginTop: 10 }}>
							<List.Item>
								Some registers are population based registers and some are
								referral based registers. The centres in Ireland, Italy and The
								Netherlands use a population based register and the rest of the
								centres use a referral based register.
							</List.Item>
							<List.Item>
								Ireland uses SNIP and the other centres use FVC. SNIP is
								correlated with FVC.
							</List.Item>
							<List.Item>
								The centre in Oxford uses ALSFRS and the other centres use
								ALSFRS-R.
							</List.Item>
						</List>
						<Divider />
						<p>
							Reference:{" "}
							<a
								href={
									"https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(18)30089-9/fulltext"
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(18)30089-9/fulltext
							</a>
						</p>
					</Segment>
				</Container>
			</Container>
		);
	}
}

export default AboutPage;
