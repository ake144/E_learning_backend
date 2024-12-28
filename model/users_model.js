const prisma = require("../config/db");



// Create a new user
async function createUser(Fname, Lname, phone_number, email, password, type = 'client') {
    const user = await prisma.user.create({
        data: {
            Fname,
            Lname,
            phoneNumber: phone_number,
            email,
            password,
            type,
        },
    });
    return user.id;
}

// Get a user by ID
async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: { id },
    });
    return user;
}

// Get a user by email
async function getUserByEmail(email) {
    const user = await prisma.user.findUnique({
        where: { email },
    });
    return user;
}

// Get a user by phone number
async function getUserByPhoneNumber(phone_number) {
    const user = await prisma.user.findUnique({
        where: { phoneNumber: phone_number },
    });
    return user;
}

// Get all users
async function getAllUsers() {
    const users = await prisma.user.findMany();
    return users;
}

// Update a user
async function updateUser(id, Fname, Lname, phone_number, email, password, type) {
    const user = await prisma.user.update({
        where: { id },
        data: {
            Fname: Fname || undefined,
            Lname: Lname || undefined,
            phoneNumber: phone_number || undefined,
            email: email || undefined,
            password: password || undefined,
            type: type || undefined,
        },
    });
    return user;
}

// Delete a user
async function deleteUser(id) {
    const result = await prisma.user.delete({
        where: { id },
    });
    return result ? 1 : 0; // Return 1 if deleted successfully, otherwise 0
}

module.exports = {
    createUser,
    getUserById,
    getAllUsers,
    getUserByPhoneNumber,
    updateUser,
    deleteUser,
    getUserByEmail,
};







