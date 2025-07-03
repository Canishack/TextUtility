import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextArea from './components/TextArea';


function App() {
  return (
    <div className='root'>
    <Navbar title="TextUtils"></Navbar>
    <TextArea heading="Enter text to make changes"></TextArea>
    </div>
  );
}

export default App;
