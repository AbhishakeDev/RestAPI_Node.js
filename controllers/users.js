import { v4 as uuidv4 } from 'uuid';

let users = []

export const createUser = (req, res) => {

    const user = req.body;
    users.push({ ...user, id: uuidv4() });

    res.send(`User with name ${user.firstName} added to DB`);
}


export const getUser = (req, res) => {
    res.send(users);
}


export const getIndividual = (req, res) => {
    // const foundUser = users.find(user => user.id === req.params.id)
    // res.send(foundUser.firstName);
    const { id } = req.params;
    const foundUser = users.find(user => user.id === id)
    res.send(foundUser);
}


export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find(user => user.id === id)

    if (firstName) {
        user.firstName = firstName
    } if (lastName) {
        user.lastName = lastName
    } if (age) {
        user.age = age
    }
    res.send(user);
}


export const deleteUser = (req, res) => {
    const { id } = req.params;
    const newUsers = users.filter(user => user.id !== id);
    res.send(newUsers);
}