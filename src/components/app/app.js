import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import ItemList from '../itemList';
import CharDetails from '../charDetails'
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from'../characterPage';
import gotService from '../../services/gotService';

import './app.css';

export default class App  extends Component {

	gotService = new gotService();

	state = {
		showRandomChar: true,
		error: false
	}

	componentDidCatch() {
		this.setState({
			error: true
		})
	}

	toggleRandomChar = () => {
		this.setState((state) => {
			return {
				showRandomChar: !state.showRandomChar
			}
		});
	}

	render() {

		const {error, showRandomChar} = this.state;

		if(error) {
			return <ErrorMessage/>
		}

		const char = showRandomChar ? <RandomChar/> : null;

		return (
			<> 
				<Container>
					<Header />
				</Container>
				<Container>
					<Row>
						<Col lg={{size: 5, offset: 0}}>
							{char}
							<button
								className="toggle-btn"
								onClick={this.toggleRandomChar}
							>Toggle random character</button>
						</Col>
					</Row>
					<CharacterPage/>
					<Row>
						<Col md='6'>
							<ItemList
							onItemSelected={this.onItemSelected}
							getData={this.gotService.getAllBooks}
							renderItem={(item) => (
								<><span>{item.name}</span><button>Click me</button></>
							)}/>
						</Col>
						<Col md='6'>
							<CharDetails charId={this.state.selectedChar}/>
						</Col>
					</Row>
					<Row>
						<Col md='6'>
							<ItemList
							onItemSelected={this.onItemSelected}
							getData={this.gotService.getAllHouses}
							renderItem={(item) => item.name}/>
						</Col>
						<Col md='6'>
							<CharDetails charId={this.state.selectedChar}/>
						</Col>
					</Row>
				</Container>
			</>
	)};
};
