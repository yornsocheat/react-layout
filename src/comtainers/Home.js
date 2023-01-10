import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { Button } from 'reactstrap';
import _ from 'lodash';

import { Footer, Nav, Display, Heading, Card, ListGroup } from '../components';
import { Table } from '../components/General';
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
					<Display size="1">Display 1</Display>
					<Display size="2">Display 2</Display>
					<Display size="3">Display 3</Display>
					<Display size="4">Display 4</Display>
					<Display size="5">Display 5</Display>
					<Display size="6">Display 6</Display>
					<Heading>Tag h1 and style h1</Heading>
					<Heading tag="p" className="h1">
						Tag h1 and style h1
					</Heading>
				</div>
				<Footer />
			</div>
		);
	};

	render() {
		const { navMode } = this.props;
		console.log(
			_.toArray([
				{ name: 'Socheat', phone: '012 233 555' },
				{ name: 'Panha', phone: '092 244 111' },
			])
		);

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
