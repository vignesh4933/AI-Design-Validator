import { Paper, Typography, Divider, Box } from '@mui/material';

interface ReasoningBoxProps {
  reasoning: string;
  confidence: number;
}

export default function ReasoningBox({
  reasoning,
  confidence,
}: ReasoningBoxProps) {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mt: 2,
        backgroundColor: 'background.paper',
      }}
    >
      <Typography variant="h6" color="text.primary">
        AI Reasoning
      </Typography>

      <Box sx={{ mt: 1 }}>
        {reasoning ? (
          <Typography variant="body2" color="text.primary">
            {reasoning}
          </Typography>
        ) : (
          <Typography variant="body2" color="text.secondary">
            No reasoning provided.
          </Typography>
        )}
      </Box>

      <Divider sx={{ my: 1.5 }} />

      <Typography variant="caption" color="text.secondary">
        Confidence score: {confidence}
      </Typography>
    </Paper>
  );
}
