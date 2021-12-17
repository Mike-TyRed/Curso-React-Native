import React, {Component, Fragment} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class ActionButtons extends Component {
    render() {
        const {reset, plus} = this.props;
        return (
            <Fragment>
                <TouchableOpacity style={styles.btnReset} onPress={reset}>
                    <Text style={styles.btnTxt}>
                        Reset
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnReset} onPress={plus}>
                    <Text style={styles.btnTxt}>
                        +10
                    </Text>
                </TouchableOpacity>
            </Fragment>
        );
    }
}

const styles = StyleSheet.create({
    btnTxt: {
        //Creo el texto que contendrá el botón
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold',
    },
    btnReset: {
        height: 50,
        width: 100,
        justifyContent: 'center', //centra las letras
        alignItems: 'center', //Centra el contenido del botón
        backgroundColor: '#3D8EB9',
        marginHorizontal: 5,
    },
});

export default ActionButtons;