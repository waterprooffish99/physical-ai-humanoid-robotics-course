import React from 'react';
import Layout from '@theme/Layout';
import Chatbot from '../components/Chatbot';

function Home() {
  return (
    <Layout
      title="Hello from Docusaurus"
      description="Description will go into a meta tag in <head />">
      <main>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h1>Welcome to the Physical AI & Humanoid Robotics Course</h1>
          <p>This is your AI-Native Textbook experience.</p>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Chatbot />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
