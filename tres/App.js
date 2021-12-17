import React, {Component, PureComponent} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import CustomButton from './components/button';
import ActionButtons from './components/actionButtons';
class App extends PureComponent {
  constructor(props) {
    super(props); //Extensión del componente para usar todos los métodos dentro del constructor
    this.state = {
      //objeto con propiedades
      counter: 0, //Se inicia en 0
    };

    console.log('constructor');

    this.handleUp = this.handleUp.bind(this); //No perder del contexto del componente y siga funcionando
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleDiez = this.handleDiez.bind(this);
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

  handleReset() {
    this.setState({counter: 0});
  }

  handleDiez() {
    const {counter: ct} = this.state;
    this.setState({counter: ct + 10});
  }

  render() {
    const {counter} = this.state;
    //Agarro el objeto estado que tiene en su propiedad el nombre counter o x nombre
    console.log('render');
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <CustomButton label="-" action={this.handleDown}/>

          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>

          <CustomButton label="+" action={this.handleUp}/>
        </View>

        <View style={styles.subcontainerReset}>
          <ActionButtons reset={this.handleReset} plus={this.handleDiez}/>
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
  subcontainerReset: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
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
