import React from 'react'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { CollectionDialogInterface } from '../../interfaces/collection'
import LoadingButton from '../common/LoadingButton'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((_theme) => ({
  cancelButton: {
    backgroundColor: "#333",
    '&:hover': {
      background: "black",
    },
  }
}))


export default function CollectionDialog({ collectionDialogState, onSubmitClick, onCancelClick, onCollectionNameChange }: CollectionDialogInterface): JSX.Element {
  const classes = useStyles()
  const { showDialog, title, description, submitButtonDisabled, submitButtonText, submitButtonLoading, collectionName } = collectionDialogState
  return (
    <div>
      <Dialog open={showDialog} onClose={onCancelClick} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {description}
          </DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Name of collection"
            fullWidth
            value={collectionName}
            onChange={(e) => onCollectionNameChange(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <LoadingButton text="Cancel" onClick={onCancelClick} loading={false} disabled={false} buttonStyle={classes.cancelButton}>
          </LoadingButton>
          <LoadingButton text={submitButtonText} onClick={onSubmitClick} loading={submitButtonLoading} disabled={submitButtonDisabled} color="primary">
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}
