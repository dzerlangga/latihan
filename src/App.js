import React from 'react';
import logo from './logo.svg';
import img from './sticker.png';
import './App.css';
import { connect } from 'tls';

function nama(element) {
if (element.nama == "ia") {
  return element.nama + " " + element.kk;
}
  return "maaf slah";
}

const element = {
  nama: 'deni',
  kk:'denot'
}

const tampil=nama(element);


const spec = "gg";
const dandi = <div> tes  {spec}</div>;



function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}


function Sum() { 
  return 1+2;
}




// menampilkan gambar dengan funtiom

function Comment (props) { 
        return (
          <div>
          <img style={{ width:'50%'}}
            src={props.author.avatarUrl}
            alt={props.author.name}
           />
            <p>{props.text}</p>
            <p>{props.author.name}</p>
            <p>{new Date().toLocaleDateString()}</p> 
            {/* tanggal */}
          </div>
        )
       }


const comment = {
          date: new Date(),
          text: 'I hope you enjoy learning React!',
          author: {
            name: 'Dandi',
            avatarUrl: 'https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2018/10/19/2605653088.jpg',
          },
        };






// timer format waktu

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date()
    };

  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
  
}

class Tombol extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

 handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : <img style={{ width:'50%'}} src={img} />}
      </button>
    );
  }

}



class Pindah extends React.Component {
  constructor(props){
    super(props);
    this.menampilkan = this.menampilkan.bind(this);
    this.kembali = this.kembali.bind(this);
    this.state = {
      tombol:false
    };
  }

  menampilkan(){
    this.setState({tombol:true});
  }

  kembali(){
    this.setState({tombol:false});
  }

  render() {
    const tombol = this.state.tombol;
    let button;

    if (tombol) {
      button = <LogoutButton onClick={this.kembali} />;
    } else {
      button = <LoginButton onClick={this.menampilkan} />;
    }

    return (

      <div>
        <Greeting tombol={tombol}/>
      {button}
      </div>

    );
  }
}


function UserGreeting(props) {
  return <h1>biasa</h1>;
}

function GuestGreeting(props) {
  return <h1>oke</h1>;
}

function Greeting(props) {
  const tombol = props.tombol;
  if (tombol) {
    return <UserGreeting  />;
  }else{
  return <GuestGreeting  />;
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}



// fungtion huruf pertama harus besar
function Tanda(props) {
  if (!props.warn) {
    return null;
  }

  const angkas = props.angkas;
  
  return (
    <p>{angkas.map((angka) =>
      <li key={angka.toString()}>
        {angka}
      </li>
    )}</p>
  );
}

const angkas = [1, 2, 3, 4, 5];

class Page extends React.Component {

  constructor(props){
    super(props);
    this.state={
      show : false
    };
    this.ilang=this.ilang.bind(this);
  }

  ilang(){
    this.setState(prevState => ({
      show : !prevState.show
    }));
  }

  render() {
    return (
      <div>
        <Tanda angkas={angkas} warn={this.state.show}/>
        <button onClick={this.ilang}>
        {this.state.show? 'Hapus' : 'Tampil'}
        </button>
      </div>
     
    );
  }
}


// function Jumlah(props) { 
//   const angkas = props.angkas;
//   const list = angkas.map((angka) =>
//     <li key={angka.toString()}>
//       {angka}
//     </li>
//   );
//   return (
//     <p>{list}</p>
//   )
//  }

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}


export default function App(props) {



    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
         {nama(element)} {dandi} {tampil}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        <br />

        <Welcome name="oke" />



        <Comment
          text={comment.text}
          author={comment.author}
        />



      <Sum/>



      <Clock  /> 


         <Tombol />

         
         <Pindah />


         <Page/>
         
         {/* <Jumlah angkas={angkas} />  */}
          <Calculator/>
      </header>
    </div>
  );
}
