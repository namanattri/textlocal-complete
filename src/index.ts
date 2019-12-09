import axios from 'axios';

export const sendSms = (apikey: string, phoneNumber: number, sender: string, message: string) => {
  const params = new URLSearchParams();

  params.append('apikey', apikey);
  params.append('numbers', `${phoneNumber}`);
  params.append('sender', sender);
  params.append('message', message);

  return axios.post('https://api.textlocal.in/send/', params);
};

export const sendSmsToMultipleNumbers = (apikey: string, phoneNumbers: number[], sender: string, message: string) => {
  const params = new URLSearchParams();

  params.append('apikey', apikey);
  params.append('numbers', `${phoneNumbers.join(',')}`);
  params.append('sender', sender);
  params.append('message', message);

  return axios.post('https://api.textlocal.in/send/', params);
};

export const sendBulk = (
  apikey: string,
  recipients: Array<{ phoneNumber: number; message: string }>,
  sender: string,
  test: boolean = true,
) => {
  const params = new URLSearchParams();

  params.append('apikey', apikey);
  params.append(
    'data',
    JSON.stringify({
      messages: recipients.map(recipient => ({
        number: recipient.phoneNumber,
        text: recipient.message,
      })),
      sender,
      test,
    }),
  );

  return axios.post('https://api.textlocal.in/bulk_json/', params);
};

export const getBalance = (apikey: string) => {
  const params = new URLSearchParams();

  params.append('apikey', apikey);

  return axios.post('https://api.textlocal.in/balance/', params);
}

export const getTemplates = (apikey: string) => {
  const params = new URLSearchParams();

  params.append('apikey', apikey);

  return axios.post('https://api.textlocal.in/get_templates/', params);
}