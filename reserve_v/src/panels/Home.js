import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Button, Group, Div, Header, Card, CardGrid, Text } from '@vkontakte/vkui';
/* import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div'; */

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Включен ли девайс?</PanelHeader>
		<Group separator="hide">
        	<center>
			<Text weight="semibold" style={{ marginBottom: 16, fontSize: 50, color: 'green' }}>ДА</Text></center><br />
      	</Group>
		<Group title="Navigation Example">
			<Div>
				<Button size="xl" level="2" onClick={bridge.send} data-to="persik">
					Рассказать друзьям
				</Button>
			</Div>
		</Group>

	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Home;
