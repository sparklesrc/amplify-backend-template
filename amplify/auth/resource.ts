import { defineAuth } from '@aws-amplify/backend';

// This is a test
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  signUpAttributes: {
    required: ['firstName', 'lastName', 'phone', 'birthDate', 'address'],
  }
});
