import React, { Fragment } from 'react';
import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import { setText } from './features/textSlice';
import { Counter } from './features/counter/Counter';


function App() {

  // creating the dispatch method and fetching the text state
  const dispatch = useDispatch();
  const { text } = useSelector(state => state.text);

  // whenever we type any data on the input 
  const handleChange = (event) => {
      dispatch(setText(event.target.value?.toUpperCase()));
  }
  

  return (
      <Fragment>
          <div className='container'>
              <h2>
                  Text: {text}
              </h2>
              <div className='input-box'>
                  <input type="text" name='text'
                      onChange={handleChange}
                      placeholder="Enter text" />
              </div>
            </div>
          <div>
          <Counter />
          </div>
      </Fragment>
  );
}

export default App;
