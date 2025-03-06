import {z as zod} from 'zod';
import {useEffect, useMemo, useState} from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import {toast} from 'src/components/snackbar';
import {Field, Form} from 'src/components/hook-form';
import {Iconify} from '../../../components/iconify';
import axios, {endpoints} from "../../../utils/axios";
// ----------------------------------------------------------------------

export const ProfileUpdateSchema = zod.object({
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
  email: zod.string().min(1, {message: 'Email is required!'}).email({message: 'Email is not valid!'}),
});

// ----------------------------------------------------------------------

export function ProfileUpdateView({currentUser, open, onClose}) {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (currentUser?.content) {
      setAvatarPreview(`data:image/png;base64,${currentUser.content}`);
    }
  }, [currentUser?.content]);

  const defaultValues = useMemo(
    () => ({
      firstname: currentUser?.name || '',
      lastname: currentUser?.surname || '',
      email: currentUser?.email || '',
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
    formState: {isSubmitting},
  } = methods;

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const promise = new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const formData = new FormData();
      formData.append("name", data.firstname);
      formData.append("surname", data.lastname);
      formData.append("email", data.email);
      formData.append("id", currentUser.id);
      formData.append("file", selectedFile);

      await axios.patch(endpoints.users.updateUser, formData, {
        headers: {
          ...axios.defaults.headers.common,
          "Content-Type": "multipart/form-data",
        },
      });

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
    <Dialog fullWidth maxWidth="sm" open={open} onClose={onClose}>
      <Form methods={methods} onSubmit={onSubmit}>
        <DialogTitle>Update Profile</DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <Avatar src={avatarPreview} sx={{width: 120, height: 120, mb: 2}}/>
            <IconButton component="label">
              <Iconify icon="material-symbols:upload"/>
              <input type="file" hidden accept="image/*" onChange={handleAvatarChange}/>
            </IconButton>
          </Box>

          <Box display="grid" rowGap={2} columnGap={2} gridTemplateColumns={{xs: '1fr', sm: 'repeat(2, 1fr)'}}>
            <Field.Text name="firstname" label="First Name" fullWidth/>
            <Field.Text name="lastname" label="Last Name" fullWidth/>
            <Field.Text name="email" label="Email" fullWidth sx={{gridColumn: 'span 2'}}/>
          </Box>
        </DialogContent>

        <DialogActions sx={{px: 3, pb: 3}}>
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
