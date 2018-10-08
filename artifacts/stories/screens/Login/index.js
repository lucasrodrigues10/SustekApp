import * as React from "react";
import {Image, Platform} from "react-native";
import {Container, Content, Header, Body, Title, Button, Text, View, Icon, Footer} from "native-base";

class Login extends React.Component {
    render() {
        return (React.createElement(Container, null,
            React.createElement(Header, {style: {height: 200}},
                React.createElement(Body, {style: {alignItems: "center"}},
                    React.createElement(Icon, {name: "bulb", style: {fontSize: 104}}),
                    React.createElement(Title, null, "Sustek"),
                    React.createElement(View, {padder: true},
                        React.createElement(Text, {style: {color: Platform.OS === "ios" ? "#000" : "#FFF"}})))),
            React.createElement(Content, null,
                this.props.loginForm,
                React.createElement(View, {padder: true},
                    React.createElement(Button, {block: true, onPress: () => this.props.onLogin()},
                        React.createElement(Text, null, "Logar")))),
            React.createElement(Footer, {style: {backgroundColor: "#F8F8F8"}},
                React.createElement(View, {style: {alignItems: "center", opacity: 0.5, flexDirection: "row"}},
                    React.createElement(View, {padder: true},
                        React.createElement(Text, {style: {color: "#000"}}, "Energia Sustentável")),
                    React.createElement(Image, {
                        style: {alignItems: 'center',width: 422 / 4, height: 86 / 4}
                    })))));
    }
}

export default Login;
//# sourceMappingURL=index.js.map
