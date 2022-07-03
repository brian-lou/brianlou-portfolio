import { Box, CircularProgress } from "@mui/material";

export const LoadingMessage = () => (
    <Box style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',
        padding: '10px'
    }
    }>
        <CircularProgress size={80} />
    </Box>
)