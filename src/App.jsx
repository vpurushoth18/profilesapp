import { useEffect, useState } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/data';

// no type imports needed in JS
const client = generateClient();

export default function App() {
  const { signOut, user } = useAuthenticator((context) => [context.user]);

  // Example: optional fetch logic from your Amplify Data backend
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.models.YourModelName.list();
        setMessage(`Fetched ${result.data.length} records.`);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  return (
    <main style={{ padding: '20px' }}>
      <h1>Welcome, {user?.signInDetails?.loginId || user?.username}!</h1>
      <p>{message || 'You are now signed in.'}</p>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}