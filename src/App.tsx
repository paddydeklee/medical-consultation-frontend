import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>Medical Consultation Platform</h1>
            <p>Welcome {user?.username}</p>
            <button onClick={signOut}>Sign out</button>
          </header>
          <main>
            {/* Add your components here */}
            <p>Upload DICOM images and view reports here.</p>
          </main>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
