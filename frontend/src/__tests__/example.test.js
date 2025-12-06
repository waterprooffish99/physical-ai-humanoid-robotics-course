import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Chatbot from '../components/Chatbot';

// Mock the fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ session_id: '123', answer: 'Mocked answer' }),
  })
);

test('renders chatbot when visible', () => {
  render(<Chatbot isVisible={true} onClose={() => {}} />);
  expect(screen.getByText(/Chatbot Assistant/i)).toBeInTheDocument();
});

test('does not render chatbot when not visible', () => {
  render(<Chatbot isVisible={false} onClose={() => {}} />);
  expect(screen.queryByText(/Chatbot Assistant/i)).not.toBeInTheDocument();
});

test('sends message when send button is clicked', async () => {
  render(<Chatbot isVisible={true} onClose={() => {}} />);
  const input = screen.getByPlaceholderText(/Ask a question.../i);
  fireEvent.change(input, { target: { value: 'Test question' } });
  fireEvent.click(screen.getByText(/Send/i));

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith('/chat', expect.any(Object)); // Check if fetch is called
  expect(await screen.findByText(/Mocked answer/i)).toBeInTheDocument();
});