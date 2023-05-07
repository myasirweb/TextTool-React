
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
        <Navbar title="TextUtils" about="About Us"/>
     
      <div className="container my-3">

                    <TextForm heading="WriteText"/>
      </div>
       
    </>
  );
}

export default App;
