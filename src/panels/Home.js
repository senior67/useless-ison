import React from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";
import { Panel, PanelHeader, Button, Group, Div, Card, CardGrid, Header, Text } from '@vkontakte/vkui';
/*import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
// import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
// import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
*/
const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Включен ли девайс?</PanelHeader><br />
		<center><Text weight="semibold" style={{ marginBottom: 16, fontSize: 50, color: 'green' }}>Да</Text></center>
		<Group title="#СамыйГлупыйЧеллендж">
			<Div>
				<Group separator="hide" header={<Header mode="secondary">#СамыйГлупыйЧеллендж</Header>}>
					<CardGrid>
						<Card size="l" mode="shadow">
							<br /><center><Text weight="regular">Это приложение - из серии приложений «Senior Useless» (сеньор бесполезен). В данном приложении вы можете узнать, включено ли устройство, с которого вы посещаете наше приложение.</Text><br /><br /><Text weight="medium">Мы запускаем челлендж - опубликуйте на своей стене ВКонтакте предложенный ниже пост, чтобы сказать всем, что Ваше устройство включено, а также дайте возможность вашим друзьям проверить статус вашего устройства!</Text><br />
				<Button mode="commerce" onClick={() => bridge.send("VKWebAppShowWallPostBox", {"message": "Благодаря приложению мне стало известно, что моё устройство включено!\n\nПопробуй и ты! Ссылка на проверку - https://vk.cc/av6cA2", "attachment": "photo-196019037_457239021"})}>
					Присоединиться к флешмобу
				</Button>
					</center><br />
						</Card>
					</CardGrid><br />
					<Button size="xl" level="2" onClick={() => bridge.send("VKWebAppJoinGroup", {"group_id": 196019037})}>
					Вступить в группу с бесполезными скриптами
				</Button>
				</Group>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
