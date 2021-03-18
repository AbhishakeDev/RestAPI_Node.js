import express from 'express';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(express.json({ extended: false }));

app.use('/users', usersRoutes);

//routes
app.get('/', (req, res) => {
    console.log('TEST');
    res.send('Hello from homepage');
});

app.listen(PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`)
})