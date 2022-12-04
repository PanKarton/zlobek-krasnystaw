import '@testing-library/jest-dom';
import { ContactForm } from 'modules/kontakt/ContactForm/ContactForm';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
const emailjs = require('@emailjs/browser');

jest.mock('@emailjs/browser');

describe('ContactForm with all scenarios', () => {
  beforeEach(() => {
    jest.resetModules(); // remove cache
    render(<ContactForm />);
  });

  it('Properly renders ContactForm', () => {
    expect(getSubmitButton()).toBeInTheDocument();
  });

  it('Renders empty inputs', () => {
    expect(getNameInput()).toHaveDisplayValue('');

    expect(getEmailInput()).toHaveDisplayValue('');

    expect(getMessageTextarea()).toHaveDisplayValue('');
  });

  it('Displays message when submit is succesful', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200, text: 'OK' });

    const user = userEvent.setup();

    await user.type(getNameInput(), 'test');
    await user.type(getMessageTextarea(), 'test');
    await user.type(getEmailInput(), 'test@test.pl');

    await user.click(getSubmitButton());

    await screen.findByText(/dziękujemy/i);
  });
  it('Displays error message when submit is rejected', async () => {
    emailjs.sendForm.mockRejectedValue({ status: 0, text: '' });

    const user = userEvent.setup();

    await user.type(getNameInput(), 'test');
    await user.type(getMessageTextarea(), 'test');
    await user.type(getEmailInput(), 'test@test.pl');

    await user.click(getSubmitButton());

    await screen.findByText(/spróbuj ponownie/i);
  });

  it('Displays errors after submit click when inputs are empty', async () => {
    const user = userEvent.setup();
    await user.click(getSubmitButton());

    await screen.findByText(/Imię jest wymagane/i);
    await screen.findByText(/Email jest wymagany/i);
    await screen.findByText(/Wiadomość jest wymagana/i);
  });
  it('Displays errors after clear inputs', async () => {
    const user = userEvent.setup();

    await user.type(getNameInput(), 'test');
    await user.type(getMessageTextarea(), 'test');
    await user.type(getEmailInput(), 'test@test.pl');

    await user.clear(getNameInput());
    await user.clear(getMessageTextarea());
    await user.clear(getEmailInput());

    await screen.findByText(/Imię jest wymagane/i);
    await screen.findByText(/Email jest wymagany/i);
    await screen.findByText(/Wiadomość jest wymagana/i);
  });
  it('Validates name input max length', async () => {
    const user = userEvent.setup();

    await user.type(getNameInput(), getNLongString(51));

    await screen.findByText(/Przekroczono ilość znaków/i);
  });
  it('Validates email input max length', async () => {
    const user = userEvent.setup();

    await user.type(getNameInput(), getNLongString(257));

    await screen.findByText(/Przekroczono ilość znaków/i);
  });
  it('Validates message input max length', async () => {
    const user = userEvent.setup();

    await user.type(getNameInput(), getNLongString(901));

    await screen.findByText(/Przekroczono ilość znaków/i);
  }, 70000);
});

const getNameInput = () => screen.getByRole('textbox', { name: /twoje imię/i });
const getEmailInput = () => screen.getByRole('textbox', { name: /twój email/i });
const getMessageTextarea = () => screen.getByRole('textbox', { name: /w czym możemy pomóc/i });
const getSubmitButton = () => screen.getByRole('button', { name: /wyślij/i });

const getNLongString = (n: number) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push('l');
  }
  return arr.join('');
};
