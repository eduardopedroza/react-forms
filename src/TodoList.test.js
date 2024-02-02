import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import TodoList from './TodoList';

it('renders without crashing', function() {
  render(<TodoList />);
})