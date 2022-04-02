import * as React from 'react';

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface CopyrightProps {
    sx: Record<string, unknown>;
}

function Copyright(props: CopyrightProps) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://sfbayrelief.org/">
                SF Bay Relief
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            maxWidth={false}
            component="footer"
            sx={{
                bgcolor: 'transparent',
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                py: [3, 6],
            }}
        >  
            <Copyright sx={{ mt: 2 }} />
        </Container>
    );

}