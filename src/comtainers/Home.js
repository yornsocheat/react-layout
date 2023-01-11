import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button } from 'reactstrap';

import { Footer, Nav, Display, Heading, Card, Table } from '../components';
import { UPDATE_NAV_MODE } from '../libraries/store/actions';

class Home extends Component {
	renderNav = () => {
		return (
			<div id="main-menu">
				<header>
					<Button onClick={() => this.props.dispatch({ type: UPDATE_NAV_MODE, data: false })}>
						<i className="bi bi-x"></i>
					</Button>
				</header>
				<nav className="navwrap">
					<div className="space border-top"></div>
					<Nav label="Login" icon="box-arrow-in-right" />
					<Nav label="Sign Up" icon="person-plus" />
					<div className="space"></div>
				</nav>
				<nav className="navwrap">
					<Nav label="Your Health" icon="clipboard-plus" />
					<Nav label="Medical" icon="clipboard-plus" />
					<Nav label="Medical" icon="clipboard-plus" />
					<div className="space"></div>
				</nav>
			</div>
		);
	};

	renderDisplay = () => {
		return (
			<Card className="p-3">
				<Display size="1">Display 1</Display>
				<Display size="2">Display 2</Display>
				<Display size="3">Display 3</Display>
				<Display size="4">Display 4</Display>
				<Display size="5">Display 5</Display>
				<Display size="6">Display 6</Display>
			</Card>
		);
	};

	renderHeading = () => {
		return (
			<Card className="p-3">
				<Heading>Tag h1 and style h1</Heading>
				<Heading tag="h1">Tag h1 and style h1</Heading>
				<Heading tag="h2">Tag h2 and style h2</Heading>
				<Heading tag="h3">Tag h3 and style h3</Heading>
				<Heading tag="h4">Tag h4 and style h4</Heading>
				<Heading tag="h5">Tag h5 and style h5</Heading>
				<Heading tag="h6">Tag h6 and style h6</Heading>
				<Heading tag="p" className="h1">
					Tag p and style h1
				</Heading>
				<Heading tag="div" className="h1">
					Tag div and style h1
				</Heading>
				<Heading tag="span" className="h1">
					Tag span and style h1
				</Heading>
			</Card>
		);
	};

	renderContent = () => {
		return (
			<div className="wraper">
				<header className="pm">
					<Button onClick={() => this.props.dispatch({ type: UPDATE_NAV_MODE, data: true })}>
						<i className="bi bi-list"></i>
					</Button>
				</header>
				<div className="content">
					<Card
						className="w-25"
						cardImageUrl="https://www.gravatar.com/avatar/5664a85b22ab45a9bf6fe96299701f92?s=328&d=identicon&r=PG&f=1"
						cardTitle="Card Title"
						cardText="Some quick example text to build on the card title and make up the bulk of the"
					/>
					<Card cardText="Some quick example text to build on the card title and make up the bulk of the" />

					<Table
						dataHeaders={['Name', 'phone number']}
						dataBodys={[
							{ name: 'Socheat', phone: '012 233 555' },
							{ name: 'Panha', phone: '092 244 111' },
						]}
					/>
					{this.renderDisplay()}
					{this.renderHeading()}
				</div>
				<Footer />
			</div>
		);
	};

	render() {
		const { navMode } = this.props;

		return navMode ? this.renderNav() : this.renderContent();
	}
}

Home.propTypes = {
	dispatch: PropTypes.func,
};

const mapStateToProps = (state) => {
	const { dispatch, navMode } = state;

	return {
		dispatch,
		navMode,
	};
};

export default connect(mapStateToProps)(Home);
