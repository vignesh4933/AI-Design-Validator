import { Button, TextField, Stack, Paper, Typography } from '@mui/material';
import { useState } from 'react';

interface InputFormProps {
  setData: (data: any) => void;
  setLoading: (loading: boolean) => void;
}

export default function InputForm({ setData, setLoading }: InputFormProps) {
  const [text, setText] = useState('');
  const [error, setError] = useState<string | null>(null);

 const handleValidate = async () => {
  setLoading(true);
  setError(null);

  try {
    const response = await fetch('http://localhost:3001/design/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ freeTextInput: text }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    const result = await response.json();
    setData(result);
  } catch (err: any) {
    console.error(err);
    setError('Backend not reachable or returned HTML error');
    setData(null);
  } finally {
    setLoading(false);
  }
};


  return (
    <Paper sx={{ p: 2, mb: 3 }}>
      <Typography variant="subtitle1">Design Input</Typography>

      <Stack spacing={2} mt={2}>
        <TextField
          label="Cable description"
          multiline
          rows={5}
          placeholder="IEC 60502-1, 10 sqmm Cu Class 2, PVC insulation 1.0 mm"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button variant="contained" onClick={handleValidate} disabled={text.trim() === ''}>
          Validate
        </Button>

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
      </Stack>
    </Paper>
  );
}
