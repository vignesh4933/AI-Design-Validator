'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

export default function Home() {
  const [input, setInput] = useState('');
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleValidate = async () => {
  setLoading(true);
  setError(null);
  setData(null);

  try {
    const res = await fetch('http://localhost:3001/design-validation/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        freeTextInput: input,
      }),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const json = await res.json();
    setData(json);
  } catch (err: any) {
    setError(err.message || 'Something went wrong');
  } finally {
    setLoading(false);
  }
};


  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Design Validator
      </Typography>

      {/* INPUT SECTION */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Design Input
        </Typography>

        <TextField
          label="Cable description"
          multiline
          rows={4}
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Cable: 10 sqmm Cu conductor, PVC 1.0mm insulation, 0.6/1 kV"
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleValidate}
          disabled={loading || !input}
        >
          {loading ? 'Validating...' : 'VALIDATE'}
        </Button>
      </Paper>

      {/* ERROR */}
      {error && (
        <Paper sx={{ p: 2, mb: 3 }}>
          <Typography color="error">{error}</Typography>
        </Paper>
      )}

      {/* RESULTS */}
      {data && (
        <>
          {/* VALIDATION RESULTS */}
          <Paper sx={{ p: 3, mb: 4 }}>
            <Typography variant="h6" gutterBottom>
              Validation Results
            </Typography>

            <Typography sx={{ mb: 2 }}>
              Overall confidence: {data?.confidence?.overall}
            </Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Attribute</TableCell>
                  <TableCell>Expected</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Comment</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {data.validation?.map((item: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell>{item.field}</TableCell>
                    <TableCell>{item.expected}</TableCell>
                    <TableCell>{item.status}</TableCell>
                    <TableCell>{item.comment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>

          {/* AI REASONING */}
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              AI Reasoning
            </Typography>

            <Typography sx={{ mb: 1 }}>
              Confidence level: {data?.confidence?.overall}
            </Typography>

            <Typography>
              {data?.reasoning ?? 'No reasoning provided.'}
            </Typography>
          </Paper>
        </>
      )}
    </Container>
  );
}
