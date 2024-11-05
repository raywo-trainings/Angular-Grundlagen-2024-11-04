type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface Toast {
  title: string;
  message: string;
  type: ToastType
}
