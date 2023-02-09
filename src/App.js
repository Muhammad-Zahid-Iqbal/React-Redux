import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { IncNumber, DecNumber } from './actions/index';

const App = () => {

const myState = useSelector((state)=>state.changeTheNumber);
const dispatch =useDispatch();
  return (
    <>
      <div className="main-div">
          <div className="container">
              <h1>Increment/Decrement counter</h1>
              <h4>using React and Redux</h4>
              <div div className="quantity">
                <a className="quantity__minus" title="Decrement" onClick={()=>dispatch(DecNumber())}><span>-</span></a>
                <input name="quantity" type="text" className="quantity__input" value={myState}/>
                <a className="quantity__plus" title="Increment" onClick={()=>dispatch(IncNumber(5))}><span>+</span></a>
              </div>
          </div>
       </div>
    </>
  )
}

export default App