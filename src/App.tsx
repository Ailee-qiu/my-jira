import React from 'react';
import './App.css';
import HomePage from './pages/homepage';
import SearchPanel from './components/search-panel';
import { Project } from './common/type';

function App() {
  return (
    <div className="App">
      {/* <HomePage></HomePage> */}
      <SearchPanel 
      // users={[]} param={{name:'wqt',personId:123}} setParam={function (param: Partial<Pick<Project, 'name' | 'personId'>>): void {
      //   throw new Error('Function not implemented.');
      // }
    //  }
     ></SearchPanel>
    </div>
  );
}

export default App;
