import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'petcarefiles',
  access: (allow) => ({
    'owners/{entity_id}/*': [
      //allow.guest.to(['read']),
      allow.authenticated.to(['write', 'delete'])
    ],
  })
});