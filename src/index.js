import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import User from './User';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
<BrowserRouter>
<User/>
</BrowserRouter>
,document.getElementById("root"))