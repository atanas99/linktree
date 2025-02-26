import { z as zod } from 'zod';
import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { toast } from 'src/components/snackbar';
import { Field, Form } from 'src/components/hook-form';
import {Iconify} from "../../../components/iconify";

// ----------------------------------------------------------------------

export const ProfileUpdateSchema = zod.object({
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
  email: zod.string().min(1, { message: 'Email is required!' }).email({ message: 'Email is not valid!' }),
  avatar: zod.string().optional(),
});

// ----------------------------------------------------------------------

export function ProfileUpdateView({ currentUser, open, onClose }) {
  const [avatarPreview, setAvatarPreview] = useState(currentUser?.avatar || '');

  const defaultValues = useMemo(
    () => ({
      firstname: currentUser?.firstname || '',
      lastname: currentUser?.lastname || '',
      email: currentUser?.email || '',
      avatar: currentUser?.avatar || '',
    }),
    [currentUser]
  );

  const methods = useForm({
    mode: 'all',
    resolver: zodResolver(ProfileUpdateSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    setValue,
    formState: { isSubmitting },
  } = methods;

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatarPreview(reader.result);
        setValue('avatar', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const promise = new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const userData = { ...data };

      reset();
      onClose();
      toast.promise(promise, {
        loading: 'Loading...',
        success: 'Update success!',
        error: 'Update error!',
      });
      await promise;
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog fullWidth maxWidth={false} open={open} onClose={onClose} PaperProps={{ sx: { maxWidth: 720 } }}>
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <Box rowGap={3} mt={3} columnGap={2} display="grid" gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar src={avatarPreview} sx={{ width: 100, height: 100, mb: 2 }} />
              <IconButton component="label">
                <Iconify icon={"material-symbols:upload"} />
                <input type="file" hidden accept="image/*" onChange={handleAvatarChange} />
              </IconButton>
            </Box>
            <Field.Text name="firstname" label="Firstname" />
            <Field.Text name="lastname" label="Lastname" />
            <Field.Text name="email" label="Email" />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Update
          </LoadingButton>
        </DialogActions>
      </Form>
    </Dialog>
  );
}
