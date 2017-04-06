import React, { Component } from 'react';
import {
    ListView,
    StatusBar
} from 'react-native'
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Card, CardItem,
    Button,
    Text,
    Content
} from 'native-base'
export default class BookSearch extends Component {
    constructor(props) {
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([
				{
					bookName: 'Yaratıcılık : Kuraları Boşverin',
				},
				{
					bookName: 'Yüzüklerin Efendisi',
				},
				{
					bookName: 'Silmarillion',
				},
				{
					bookName: 'Hobbit',
				},
                {
					bookName: 'Yaratıcılık : Kuraları Boşverin',
				},
				{
					bookName: 'Yüzüklerin Efendisi',
				},
				{
					bookName: 'Silmarillion',
				},
				{
					bookName: 'Hobbit',
				},
                {
					bookName: 'Yaratıcılık : Kuraları Boşverin',
				},
				{
					bookName: 'Yüzüklerin Efendisi',
				},
				{
					bookName: 'Silmarillion',
				},
				{
					bookName: 'Hobbit',
				},
                {
					bookName: 'Yaratıcılık : Kuraları Boşverin',
				},
				{
					bookName: 'Yüzüklerin Efendisi',
				},
				{
					bookName: 'Silmarillion',
				},
				{
					bookName: 'Hobbit',
				},
			])
		};
	}
    render() {
        return (
            <Container>
                <Header searchBar rounded style={{ backgroundColor:'#50D688' }}>
                    <StatusBar
                        backgroundColor='#50D688'
                    />
                    <Item>
                        <Icon name="search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(data) => (
                            <Card>
                                <CardItem>
                                    <Text style={{ fontSize:14, color:'#4A4A4A' }}>{data.bookName}</Text>
                                </CardItem>
                            </Card>
                        )}
                    />
                </Content>
            </Container>
        );
    }
}
