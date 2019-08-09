import { createAppContainer, createStackNavigator } from "react-navigation";
import Main from "./pages/main";

export default createAppContainer(
    createStackNavigator({
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    },
}));

// export default createAppContainer(AppNavigator);