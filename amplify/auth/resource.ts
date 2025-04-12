import { defineAuth } from '@aws-amplify/backend';
import parameters from './parameters.json';

interface Parameters {
  requiredAttributes: string[];
}

const typedParameters: Parameters = parameters as unknown as Parameters;

/**
 * Define and configure your auth resource
  userAttributes: typedParameters.requiredAttributes.reduce((acc, attr) => {
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: typedParameters.requiredAttributes.reduce((acc: Record<string, { required: boolean }>, attr) => {
    acc[attr] = { required: true };
    return acc;
  }, {} as Record<string, { required: boolean }>),
});
