import { defineAuth } from '@aws-amplify/backend';

// This is a test
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    given_name: true,
    family_name: true,
    birthdate: true,
    address: true,
    phone_number: true,
  }
});
