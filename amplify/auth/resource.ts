import { defineAuth } from '@aws-amplify/backend';

// This is a test
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    givenName: { required: false, mutable: true },
    familyName: { required: false, mutable: true },
    birthdate: { required: false, mutable: true },
    address: { required: false, mutable: true },
    phoneNumber: { required: false, mutable: true },
  }
});
