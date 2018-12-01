import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TextInput, Alert, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import {VictoryBar, VictoryChart, VictoryTheme, VictoryPie} from "victory-native";
import logo from './src/img/sustek-logo.png'
import moeda from './src/img/moeda.jpg'
import sustentavel from './src/img/sustentavel.jpg'
import relogio from './src/img/relogio.jpg'
import {Icon} from 'react-native-elements'

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

class Entrada extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 10}}>
                <Text style={{color: 'red'}}>
                    Digite o seu usuário!
                </Text>
                <TextInput
                    style={{height: 40}}
                    placeholder='Digite o seu nome: '
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && 'viadinho').join(' ')}
                </Text>
            </View>
        );
    }
}

class DadosLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={{padding: 0}}>
                <Text style={{color: 'blue'}}>
                    DIGITA CERTO, SEU BOSTINHA!
                </Text>
                <TextInput
                    style={{height: 40}}
                    placeholder='Usuário'
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({text})}
                />
                <TextInput
                    style={{height: 40}}
                    placeholder='Senha'
                    placeholderTextColor='white'
                    onChangeText={(text) => this.setState({text})}
                />
            </View>
        );
    }
}

class QuadradoLegal extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1, backgroundColor: 'skyblue'}}/>
                <View style={{flex: 3, backgroundColor: 'steelblue'}}/>
            </View>
        );
    }
}

class Quadradinhos extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
            }}>
                <View style={{height: 50, width: 50, backgroundColor: 'red'}}/>
                <View style={{height: 100, width: 100, backgroundColor: 'orange'}}/>
                <View style={{height: 150, width: 150, backgroundColor: 'yellow'}}/>
            </View>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text style={styles.bigblue}> Querido, {this.props.name}!</Text>
            </View>
        )
    }
}

class BobEsponja extends Component {
    render() {
        let pic = {
            uri: 'https://vignette.wikia.nocookie.net/spongebob/images/b/bb/Bob_Esponja.png/revision/latest?cb=20110611200507&path-prefix=pt-br'
        };
        return (
            <View style={{alignItems: 'center'}}>
                <Image source={pic} style={{width: 100, height: 100}}/>
            </View>
        );
    }
}

class Logo extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Image
                    source={logo}
                    style={{width: 350, height: 350}}
                    resizeMode={'contain'}
                />
            </View>
        );
    }
}

class Moeda extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Image
                    source={moeda}
                    style={{width: 150, height: 150}}
                    resizeMode={'contain'}
                />
                <Text style={{marginLeft: 10, color: 'white'}}>
                    Economize na conta de luz
                </Text>
            </View>
        );
    }
}

class Relogio extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Image
                    source={relogio}
                    style={{width: 150, height: 150}}
                    resizeMode={'contain'}
                />
                <Text style={{marginLeft: 10, color: 'white'}}>
                    Antecipe os seus gastos
                </Text>
            </View>
        );
    }
}

class Sustentavel extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Image
                    source={sustentavel}
                    style={{width: 150, height: 150}}
                    resizeMode={'contain'}
                />
                <Text style={{marginLeft: 10, color: 'white'}}>
                    Ajude ao meio ambiente
                </Text>
            </View>
        );
    }
}

const botao_estiloso = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

class Botao extends Component {
    render() {
        return (
            <View style={botao_estiloso.container}>
                <View style={botao_estiloso.buttonContainer}>
                    <Button
                        onPress={() => {
                            Alert.alert('NÃO ENCOSTA EM MIM, SEU TARADO!');
                        }}
                        title='Clica'
                    />
                </View>
            </View>
        );
    }
}

class Pisca extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => (
            this.setState(previousState => (
                {isShowingText: !previousState.isShowingText}
            ))
        ), 1000);
    }

    render() {
        if (!this.state.isShowingText) {
            return null;
        }
        return (
            <Text>{this.props.text}</Text>
        );
    }
}

class TelaInicial extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#f10241'}}>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: "space-between", alignItems: 'center'}}>
                    <Moeda/>
                    <Relogio/>
                    <Sustentavel/>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginBottom: 5}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{color: 'white'}} h1> Entrar </Text>
                        <Icon
                            raised
                            name='arrow-right'
                            type='font-awesome'
                            color='#f50'
                            onPress={() => this.props.navigation.navigate('Login')}
                        />
                    </View>

                </View>

            </View>
        );
    }
}

const styles_tela_login = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f10241',
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        width: 100,
        height: 100
    }
});

class TelaLogin extends React.Component {
    render() {
        return (
            <View style={styles_tela_login.container}>

                <View style={styles_tela_login.container}>
                    <Logo/>
                </View>
                <View style={styles_tela_login.container}>
                    <DadosLogin/>
                    <Button
                        title="Logar"
                        color="#228B22"
                        onPress={() => this.props.navigation.navigate('Teste')}
                    />
                </View>
            </View>
        );
    }
}

const data = [
    {quarter: 1, earnings: 13000},
    {quarter: 2, earnings: 16500},
    {quarter: 3, earnings: 14250},
    {quarter: 4, earnings: 19000}
];

const styles_vic = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
});

class TelaTeste extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#f10241'}}>
                <View style={{flex: 1}}>
                    <VictoryPie
                        colorScale="cool"
                        data={[
                            {x: "Televisão", y: 35},
                            {x: "PC", y: 30},
                            {x: "Geladeira", y: 65}
                        ]}
                        labelRadius={60}
                        style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" }}}
                    />
                    <BobEsponja/>
                    <QuadradoLegal/>
                    <Quadradinhos/>
                    <Entrada/>
                    <Botao/>
                </View>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: TelaInicial,
        Login: TelaLogin,
        Teste: TelaTeste
    },
    {
        initialRouteName: 'Home',
        headerLayoutPreset: 'center',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            title: 'Sustek',
            headerStyle: {
                backgroundColor: 'blue',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}