import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Paper, Grid, Card, CardContent, CardMedia } from '@mui/material';


interface tk {
    title: string;
    description: string;
}

const AddTask = () => {
    const [task, setTask] = useState({
        title: '',
        description: '',
    });

    const [data, setData] = useState<tk[]>([])

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setTask(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event: any) => {
        event.preventDefault(); // Prevents default form submission behavior
        console.log(task); // Logs the current state data
        const arr2 = [...data, task]
        setData(arr2)
        setTask({ title: '', description: '' })



    };

    return (
        <div className='container'>
            <Box sx={{ boxShadow: 3, display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 400, margin: '20px auto', padding: 10 }}>
                <TextField
                    id="task-title"
                    name="title"
                    label="Task Title"
                    variant="outlined"
                    fullWidth
                    size="small"
                    value={task.title}
                    onChange={handleChange}
                />
                <TextField
                    id="task-description"
                    name="description"
                    label="Task Description"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    size="small"
                    value={task.description}
                    onChange={handleChange}
                />
                <Button variant='contained' disabled={(task.title.length > 0 && task.description.length > 0) ? false : true} onClick={handleSubmit}>Add Task</Button>
            </Box>

            <Grid container spacing={5}>
                {
                    data.map((d, index) =>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardContent>
                                    <Typography>Heading:{d.title}</Typography>
                                    <Typography>Description:{d.description}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>


                    )
                }
            </Grid>

        </div >
    );
};

export default AddTask;
