import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
// import axios from 'axios'
import EditorContainer from './components/EditorContainer/EditorContainer';
import './hooks/useWorker';

function App() {
  useEffect(() => {
    // axios.get('/api/notecode/templates')
    // .then(response => {
    //   setTemplates(response.data);
    // })
    // .catch(error => {
    //   console.error('Error getting code content:', error);
    // });
    console.log('App mounted');
    setTimeout(() => {
      localStorage.setItem(
        'templates',
        JSON.stringify([
          { language: 'html', content: '<html><body><h1>Hello World</h1></body></html>' },
        ]),
      );
    }, 1000);
  }, []);

  return (
    <div className="App">
      <img src="/assets/NoteCodeLogo.svg" alt="NoteCode Logo" loading="lazy" />
      <div className="title">Create & Share your Code easily</div>
      <BrowserRouter>
        <Routes>
          <Route path={'/:id'} element={<EditorContainer />} />
          <Route index element={<EditorContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
