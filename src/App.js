import React, { Fragment} from 'react';
import logo from './logo.svg';

import { Provider } from 'react-redux'
import img from './sticker.png';
import './App.css';
import Spritesheet from 'react-responsive-spritesheet';
import bg1 from './Untitled-3.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


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











//categori


class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{ color: 'red' }}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: false, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];









class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="null"></option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}






class OuterClickExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }

  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }

  render() {
    return (
      <div ref={this.toggleContainer}>
        <button onClick={this.onClickHandler}>Select an option</button>
        {this.state.isOpen && (
          <ul>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
          </ul>
        )}
      </div>
    );
  }
}


const Home = ({Home})=>{
  return "dadi";
};
const About = ({About})=>{
  return "dedi";
};





export default function App(props) {
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p >
         {nama(element)} {dandi} {tampil}
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
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
          <FilterableProductTable products={PRODUCTS} />
          <FlavorForm/>
{/* animasi berputar */}
          <Spritesheet
            style={{width:'20%'}}
            image={bg1}
            widthFrame={420}
            heightFrame={500}
            steps={14}
            fps={8}
            autoplay={true}
            loop={true}
            />
          <OuterClickExample/>

{/* ruote link */}
          <Router>
            <Link to="/">dandi</Link>
            <Link to="/about">deni</Link>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
              </Switch>
          </Router>


          <div className="todo-app">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
          </div>

      </header>
      <div style={{backgroundColor:"red" , height:"100%"}}>
        <ul>
            <li>cek</li>
            <li>cek</li>
            <li>cek</li>
          <li>cek</li>
        </ul>
      </div>
    </div>
  );
}
