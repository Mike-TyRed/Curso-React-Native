import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import CustomButton from './components/button';

class App extends Component {
  constructor(props) {
    super(props); //Extensión del componente para usar todos los métodos dentro del constructor
    this.state = {
      //objeto con propiedades
      counter: 0, //Se inicia en 0
    };
    this.handleUp = this.handleUp.bind(this); //No perder del contexto del componente y siga funcionando
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    //Creo la función de sumar
    const {counter: ct} = this.state; //establece un alias al estado counter
    this.setState({counter: ct + 1});
  }

  handleDown() {
    //Creo la función de restar
    const {counter: ct} = this.state; //establece un alias al estado counter
    this.setState({counter: ct - 1}/*, () => this.setState({counter: 100})*/); //Hace la primer función y después ejecuta otra inmediatamente
  }
  render() {
    const {counter} = this.state;
    //Agarro el objeto estado que tiene en su propiedad el nombre counter o x nombre
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <CustomButton label="-" action={this.handleDown}/>

          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>

          <CustomButton label="+" action={this.handleUp}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //Creo el diseño de los componentes
  container: {
    flex: 1, //Abarco la pantalla completa
    backgroundColor: '#25373D', //Pongo color al fondo
    justifyContent: 'center', //centro verticalmente el componente
  },
  subcontainer: {
    //Creo el espacio del recuadro que será el botón
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row', //Desplaza el contenido horizontalmente
  },
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
  counterContainer: {
    //Creo un espacio vacío entre ambos botones
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
