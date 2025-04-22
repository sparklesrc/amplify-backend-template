import { defineAuth } from '@aws-amplify/backend';

// This is a test
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    given_name: { required: true, mutable: true },
    family_name: { required: true, mutable: true },
    birthdate: { required: true, mutable: true },
    address: { required: true, mutable: true },
    phone_number: { required: true, mutable: true },
  }
});
