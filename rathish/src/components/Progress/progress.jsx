import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
  return (
    <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="warning" aria-label="Loading…" />
      <CircularProgress color="success" aria-label="Loading…" />
      <CircularProgress color="info" aria-label="Loading…" />
    </Stack>
  );
}