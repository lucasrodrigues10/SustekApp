import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Image, Text, View, TextInput, Alert, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";

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
                    Tradutor de nomes!
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
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <View style={{flex: 1}}>


                    <Button
                        title="Login"
                        onPress={() => this.props.navigation.navigate('Login')}
                    />
                </View>
            </View>
        );
    }
}


class TelaLogin extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Login</Text>
                <Button
                    title="Teste"
                    onPress={() => this.props.navigation.navigate('Teste')}
                />
            </View>
        );
    }
}

class TelaTeste extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <View style={{flex: 1}}>
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
        initialRouteName: "Home"
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}