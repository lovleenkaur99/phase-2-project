import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Homepage from './components/Homepage';
import Options from './components/Options';
import TriviaCard from './components/TriviaCard';
import Form from './components/Form';
import TriviaPage from './components/TriviaPage';
// import LastPage from './components/LastPage';

// import { singleQuestions, getQuestions } from './loaders';

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [ 
        {// this is the default route inside App
            index : true,
            element: <Homepage />
        },
        { 
            path : "triviaCard",
            element : <TriviaCard />,
            // loaders : singleQuestions
        }, 
        {
            path: "options",
            element : <Options/>
        },
        { 
            path : "form",
            element : <Form />
        }
    ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


