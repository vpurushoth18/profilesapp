
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { Amplify } from 'aws-amplify';
// import { Authenticator } from '@aws-amplify/ui-react';
// import App from './App.jsx';
// import outputs from '../amplify_outputs.json';
// import './index.css';
// import '@aws-amplify/ui-react/styles.css';

// Amplify.configure(outputs);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Authenticator>
//       <App />
//     </Authenticator>
//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import App from './App.jsx';
import outputs from '../amplify_outputs.json';
import './index.css';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="auth-wrap">
      <Authenticator>
        <App />
      </Authenticator>
    </div>
  </React.StrictMode>
);



