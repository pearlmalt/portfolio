import React from 'react';
import Review from './Review';
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>Pearl Malt</h2>
          <h4>My Projects</h4>
          <div className='underline'></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default App;
