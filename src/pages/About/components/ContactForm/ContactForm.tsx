import { useState } from 'react';
import { TextField, Button, Box, Alert, Snackbar } from '@mui/material';
import styled from 'styled-components';
import { media } from '@/styles/mediaQueries';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledTextField
          required
          name="name"
          label={t('contact.nameFieldPlaceholder')}
          value={formData.name}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          required
          name="email"
          label={t('contact.emailFieldPlaceholder')}
          type="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
        />
        <StyledTextField
          required
          name="message"
          label={t('contact.messageFieldPlaceholder')}
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
          variant="outlined"
        />
        <SubmitButton
          type="submit"
          variant="contained"
          color="primary"
        >
          {t('contact.button')}
        </SubmitButton>
      </StyledForm>
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert severity="success" onClose={() => setShowSuccess(false)}>
          Message sent successfully!
        </Alert>
      </Snackbar>
    </FormContainer>
  );
};

const FormContainer = styled(Box)`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  gap: 20px;
  width: 100%;
`;

const StyledTextField = styled(TextField)`
  && {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 4px;

    .MuiOutlinedInput-root {
      color: white;
      
      &:hover .MuiOutlinedInput-notchedOutline {
        border-color: rgba(255, 255, 255, 0.5);
      }
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: rgba(255, 255, 255, 0.2);
    }

    .MuiInputLabel-root {
      color: rgba(255, 255, 255, 0.7);
    }

    ${media.down('sm')`
      font-size: 14px;
    `}
  }
`;

const SubmitButton = styled(Button)`
  && {
    padding: 12px 24px;
    font-size: 1rem;
    text-transform: none;
    
    ${media.down('sm')`
      font-size: 0.9rem;
      padding: 10px 20px;
    `}
  }
`;

export default ContactForm; 