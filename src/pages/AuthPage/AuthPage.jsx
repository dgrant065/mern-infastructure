import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <h1>Play By Play</h1>
      <h2>Our mission is to you into your next gaming adventure!! We pride ourselves with providing you with all the information needed for you to find your next60 hour time sink!(but seriously take breaks lol)Once you find your fit, be sure to leave a review of the game so that others can see all the good and bad things of the game.</h2>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
      { showSignUp ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
      }
    </main>
  );
}