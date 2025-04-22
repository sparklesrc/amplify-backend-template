import { defineAuth } from '@aws-amplify/backend';

// This is a test
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    givenName: { required: true, mutable: true },
    familyName: { required: true, mutable: true },
    birthdate: { required: true, mutable: true },
    address: { required: true, mutable: true },
    phoneNumber: { required: true, mutable: true },
  }
});
