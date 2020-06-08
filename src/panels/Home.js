import React from 'react';
import PropTypes from 'prop-types';
import bridge from "@vkontakte/vk-bridge";
import { Panel, PanelHeader, Button, Group, Div, Card, CardGrid, Header, Text, Link, FixedLayout, PromoBanner } from '@vkontakte/vkui';
/*import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
// import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
// import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
*/

const promoBannerProps = {
	title: 'Здесь может быть ваша реклама! (от 30р./сутки)',
	domain: 'vk.com',
	trackingLink: 'https://vk.com/uselesssenior?w=product-196019037_3984468%2Fquery',
	ctaText: 'Заказать',
	advertisingLabel: 'Реклама',
	iconLink: 'https://sun1-99.userapi.com/PC1w13YZAuKO9MlopsiOk1eVhfXH1zlWG9ncXA/jPEouoSyx70.jpg',
	description: 'Здесь могла бы быть ваша реклама, но вы её еще не заказали :(',
	ageRestriction: 14,
	statistics: [
	  { url: '', type: 'playbackStarted' },
	  { url: '', type: 'click' }
	]
};

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Включен ли девайс?</PanelHeader><br />
		<center><Text weight="semibold" style={{ marginBottom: 16, fontSize: 50, color: 'green' }}>Да</Text><Text weight="semibold" style={{ marginBottom: 16, fontSize: 20, color: 'green' }}>ваше устройство включено</Text></center>
		<Group title="#СамыйГлупыйЧеллендж">
			<Div>
				<Group separator="hide" header={<Header mode="secondary">#СамыйГлупыйЧеллендж</Header>}>
					<CardGrid>
						<Card size="l" mode="shadow">
							<br /><center><Text weight="regular">Это приложение - из серии приложений «Useless Senior» (Бесполезный Сеньор). В данном приложении вы можете узнать, включено ли устройство, с которого вы посещаете наше приложение.</Text><br /><br /><Text weight="medium">Мы запускаем челлендж - опубликуйте на своей стене ВКонтакте предложенный ниже пост, чтобы сказать всем, что Ваше устройство включено, а также дайте возможность вашим друзьям проверить статус своего устройства!</Text><br />
				<Button mode="commerce" onClick={() => bridge.send("VKWebAppShowWallPostBox", {"message": "Благодаря приложению мне стало известно, что моё устройство включено!\n\nПопробуй и ты! Ссылка на проверку - https://vk.cc/av6cA2\n\n#СамыйГлупыйЧеллендж #МойДевайсВключен", "attachments": "photo-196019037_457239021"})}>
					Присоединиться к флешмобу
				</Button>
					</center><br />
					</Card>
				</CardGrid><br />
				<Button size="xl" level="2" onClick={() => bridge.send("VKWebAppJoinGroup", {"group_id": 196019037})}>
					Вступить в группу с бесполезными скриптами
				</Button>
				<br /><br />
				<center><Link href="https://vk.com/uselesssenior">*разработчик - бесполезный сеньор*</Link></center>
				</Group>
			</Div>
		</Group>
		<Group title="Закажи рекламу здесь!">
			<FixedLayout vertical="bottom">
				<PromoBanner bannerData={promoBannerProps} />
			</FixedLayout>
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
