import { FormButton } from 'Components/Atoms/FormButton/FormButton';
import { StyledInput } from 'Components/Atoms/FormInput/FormInput';
import { StyledTextArea } from 'Components/Atoms/FormTextArea/FormTextArea';
import { StyledForm } from './ContactForm.styles';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const form = useRef();
  const onSubmit = async data => {
    try {
      console.log(`wysyłam`, data);
      // env data
      const serviceId = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY;

      const response = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      console.log(response);
      console.log(response.text);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <StyledForm ref={form} onSubmit={handleSubmit(onSubmit)}>
      <a href="www.facebook.pl">FACEBOOK</a>;
      <StyledInput {...register('from_name')} id="name" type="text" placeholder="Twoje imię" />
      <StyledInput {...register('user_email')} id="email" type="email" placeholder="Twój email" />
      <StyledTextArea
        {...register('message')}
        id="message"
        type="text"
        placeholder="W czym możemy pomóc?"
      />
      <FormButton type="submit">Wyślij</FormButton>
    </StyledForm>
  );
};

export default ContactForm;
