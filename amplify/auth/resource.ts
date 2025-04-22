import { defineAuth } from '@aws-amplify/backend';

// This is a test
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  signUpAttributes: {
    required: ['name', 'family_name', 'phone_number', 'birthdate', 'address'],
  }
});
