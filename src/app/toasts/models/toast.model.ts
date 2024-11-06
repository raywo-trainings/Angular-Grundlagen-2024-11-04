import {v4 as uuid} from 'uuid';


type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface Toast {
  id: string;
  title: string;
  message: string;
  type: ToastType
}


export function createToast(title: string,
                            message: string,
                            type: ToastType = "info"): Toast {
  return {
    id: uuid(),
    title,
    message,
    type
  };
}
