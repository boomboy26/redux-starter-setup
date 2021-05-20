import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { alertMessage } from './actions/alertAction';
function App() {
  const dispatch = useDispatch();
  const alertPayload = useSelector((state) => state.alert);

  const alertHandler = () => {
    dispatch(alertMessage('This is simple alert'));
  };

  console.log(alert);
  return (
    <div className='App'>
      <header className='App-header'>
        Redux Starter <br />
        Use Redux devtool extension to see Redux state
        <button onClick={alertHandler}> Simple Alert</button>
        {alertPayload.map((alertM) => (
          <p key={alertM.id}> {alertM.message}</p>
        ))}
      </header>
    </div>
  );
}

export default App;
