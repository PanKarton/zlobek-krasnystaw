import '@testing-library/jest-dom';
import { ContactForm } from 'modules/kontakt/ContactForm/ContactForm';
import { render, screen, waitFor } from 'test-utils';
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

    await screen.findByText(/Ups, coś poszło nie tak/i);
  });

  it('Displays error when email input is empty', async () => {
    const user = userEvent.setup();

    await user.type(getNameInput(), 'test');
    await user.type(getMessageTextarea(), 'test');

    await user.click(getSubmitButton());

    await screen.findByText(/Uzupełnij brakujące pola/i);
    await screen.findByText(/Email jest wymagany/i);
  });
  it('Displays error when message textarea is empty', async () => {
    const user = userEvent.setup();

    await user.type(getNameInput(), 'test');
    await user.type(getEmailInput(), 'test@test.pl');

    await user.click(getSubmitButton());

    await screen.findByText(/Uzupełnij brakujące pola/i);
    await screen.findByText(/Wiadomość jest wymagana/i);
  });

  it('Displays error when name input is empty', async () => {
    const user = userEvent.setup();

    await user.type(getEmailInput(), 'test@test.pl');
    await user.type(getMessageTextarea(), 'test');

    await user.click(getSubmitButton());

    await screen.findByText(/Uzupełnij brakujące pola/i);
    await screen.findByText(/Imię jest wymagane/i);
  });
});

const getNameInput = () => screen.getByRole('textbox', { name: /twoje imię/i });
const getEmailInput = () => screen.getByRole('textbox', { name: /twój email/i });
const getMessageTextarea = () => screen.getByRole('textbox', { name: /w czym możemy pomóc/i });
const getSubmitButton = () => screen.getByRole('button', { name: /wyślij/i });
