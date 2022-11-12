// import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';

function App() {
    const clickHandler = () => {
        console.log(Math.random());
    };
  return (
    <div className="App">
      <Button title={'First Ol'} type={'primary'}  click = {clickHandler}/>
      <Button title={'ZyZ Tms'} type={'secondary'}/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
