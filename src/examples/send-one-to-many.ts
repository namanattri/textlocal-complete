import { sendSmsToMultipleNumbers } from '../index';

sendSmsToMultipleNumbers(
  'YOUR-API-KEY',
  [
    /** Array of phone numbers */
  ],
  'SENDER-CODE-6-LETTERS',
  'Message matching the template',
);
