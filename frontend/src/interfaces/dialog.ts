export interface SimpleDialogInterface {
  title: string;
  description: string;
  showDialog: boolean;
  submitButtonText: string;
  submitButtonLoading?: boolean;
  submitButtonDisabled?: boolean;
  cancelButtonLoading?: boolean;
  cancelButtonDisabled?: boolean;
  cancelButtonText?: string;
  onSubmitClick: React.MouseEventHandler<HTMLButtonElement>;
  onCancelClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseDialog?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface DialogStateInterface {
  title: string;
  description: string;
  isError: boolean;
  showDialog: boolean;
  submitButtonText: string;
}
