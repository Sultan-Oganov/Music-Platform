import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const FormUpload = () => {
    return (
        <Grid container direction='column' style={{ padding: 20 }}>
            <TextField
                style={{ marginTop: 10 }}
                label={'Название трека'}
            />
            <TextField
                style={{ marginTop: 10 }}
                label={'Имя исполнителя'}
            />
            <TextField
                style={{ marginTop: 10 }}
                label={'Слова к треку'}
                multiline
                rows={3}
            />
        </Grid>
    );
};

export default FormUpload;