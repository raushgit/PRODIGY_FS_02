import { toast } from 'react-toastify';
//This is the utilit file for the frontend application
//Everything that is common to the frontend application should be placed here
export const notify = (message, type) => {
    toast[type](message);
}