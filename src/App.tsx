import React from 'react';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';

const App: React.FC = () => {
const onSubmit = (form:{name:string; description:string;})=>{
  console.log(form)
}
  return (<>
  <SampleProvider>
    <MyForm onSubmit={onSubmit}/>
    <ReducerSample/>
    </SampleProvider>
  </>)
};

export default App;