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
import LastPage from './components/LastPage';

import { singleQuestions } from './loaders';

const router = createBrowserRouter([
{
    path: "/",
    element: <App />,
    children: [ 
        {// this is the default route inside App
            path : true,
            element: <Homepage />
        },
        {
            path: "options",
            element : <Options/>
        },
        { 
            path : "form",
            element : <Form />
        },
        { 
            path : "triviaPage",
            element : <TriviaPage />
        },
        { 
            path : "triviaCard/:id",
            element : <TriviaCard />,
            loaders : singleQuestions
        },
        { 
            path: "lastpage",
            element : <LastPage/>
        }
    ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);


