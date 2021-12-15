import React, {Component} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import propTypes from 'prop-types';

class ButtonCustom extends Component {
  render() {
    const {label, action} = this.props;
    return (
      <TouchableOpacity style={styles.btn} onPress={action}>
        <Text style={styles.btnTxt}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

/* function ButtonCustom(props) {
    const {label, action} = props;
    return(
        <TouchableOpacity style={styles.btn} onPress={action}>
            <Text style={styles.btnTxt}>{label}</Text>
        </TouchableOpacity>
  );
} */

ButtonCustom.propTypes = {
  label: propTypes.string.isRequired,
  action: propTypes.func,
};

const styles = StyleSheet.create({
  btn: {
    //Creo el botón junto sus características
    width: 50,
    height: 50,
    justifyContent: 'center', //centra las letras
    alignItems: 'center', //Centra el contenido del botón
    backgroundColor: '#3D8EB9',
  },
  btnTxt: {
    //Creo el texto que contendrá el botón
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
});
export default ButtonCustom;
