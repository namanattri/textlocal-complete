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
