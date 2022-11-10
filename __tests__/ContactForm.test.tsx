import '@testing-library/jest-dom';
import { ContactForm } from 'modules/kontakt/ContactForm/ContactForm';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
const emailjs = require('@emailjs/browser');

jest.mock('@emailjs/browser');

describe('ContactForm with all scenarios', () => {
  beforeEach(() => {
    jest.resetModules(); // remove cache
  });

  it('Properly renders ContactForm', () => {
    render(<ContactForm />);

    expect(getSubmitButton()).toBeInTheDocument();
  });

  it('Renders empty inputs', () => {
    render(<ContactForm />);

    expect(getNameInput()).toHaveDisplayValue('');

    expect(getEmailInput()).toHaveDisplayValue('');

    expect(getMessageTextarea()).toHaveDisplayValue('');
  });

  it('Displays message when submit is succesful', async () => {
    emailjs.sendForm.mockResolvedValue({ status: 200, text: 'OK' });

    const user = userEvent.setup();

    render(<ContactForm />);

    user.type(getNameInput(), 'test');
    user.type(getMessageTextarea(), 'test');
    user.type(getEmailInput(), 'partokl@112wp.pl');

    user.click(getSubmitButton());

    await screen.findByText(/dziękujemy/i);
  });

  it.todo('Displays error when email syntax is not valid');

  it.todo('Displays error when email input is empty');

  it.todo('Displays error when name input is empty');
});

const getNameInput = () => screen.getByRole('textbox', { name: /twoje imię/i });
const getEmailInput = () => screen.getByRole('textbox', { name: /twój email/i });
const getMessageTextarea = () => screen.getByRole('textbox', { name: /w czym możemy pomóc/i });
const getSubmitButton = () => screen.getByRole('button', { name: /wyślij/i });
