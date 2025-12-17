import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import InputForm from '../components/InputForm';
import ResultsTable from '../components/ResultsTable';
import ReasoningBox from '../components/ReasoningBox';

export default function DesignValidatorPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Design Validator
      </Typography>

      {/* Input Form */}
      <InputForm setData={setData} setLoading={setLoading} />

      {/* Validation Table */}
      <ResultsTable data={data} loading={loading} />

      {/* AI Reasoning Box */}
      <ReasoningBox
        reasoning={data?.reasoning}
        confidence={data?.confidence?.overall}
      />
    </Container>
  );
}
