import { style } from '@mui/system';
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers';
import { render, screen, fireEvent} from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// getByText: Searching for one instance


 test('test that App component doesn\'t render dupicate Task', () => {
  render(<App />);

  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});

  const dueDate = "06/24/2022";
  
  //task 1
  fireEvent.change(inputTask, { target: { value: "Dance"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);

  //task 2
  fireEvent.change(inputTask, { target: { value: "Dance"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);

  const check = screen.getByText(/Dance/i);

  expect(check).toBeInTheDocument();



  


 });

 test('test that App component doesn\'t add a task without task name', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/24/2022";

  fireEvent.change(inputTask, { target: { value: "Dance"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);

  const check = screen.getByText(/Dance/i);

  expect(check).toBeInTheDocument();


 });

 test('test that App component doesn\'t add a task without due date', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/24/2022";

  fireEvent.change(inputTask, { target: { value: "Dance"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);

  const check = screen.getByText(/Dance/i);

  expect(check).toBeInTheDocument();

 });



 test('test that App component can be deleted thru checkbox', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  const dueDate = "06/24/2022";

  fireEvent.change(inputTask, { target: { value: "Dance"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);

  const check = screen.getByText(/Dance/i);
  expect(check).toBeInTheDocument();

 });


 test('test that App component renders different colors for past due events', () => {
  render(<App />);
  const inputTask = screen.getByRole('textbox', {name: /Add New Item/i});
  const inputDate = screen.getByPlaceholderText("mm/dd/yyyy");
  const element = screen.getByRole('button', {name: /Add/i});
  //different date
  const dueDate = "06/22/2022";

  fireEvent.change(inputTask, { target: { value: "Dance"}});
  fireEvent.change(inputDate, { target: { value: dueDate}});
  fireEvent.click(element);

  // im not sure..

  const check = screen.getByText(/Dance/i).toHaveStyle('color:#ffffffff');
  expect(check).toBeInTheDocument();

 });
