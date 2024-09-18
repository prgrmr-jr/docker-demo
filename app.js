  const express = require("express");
  const { PrismaClient } = require("@prisma/client"); 
  const app = express();

  app.use(express.json()); 

  const prisma = new PrismaClient();

  app.get('/', async (req, res) => {
    res.json({message: "Welcome to Docker 🚢"});
  });

// GET ALL USERS
  app.get('/users', async (req, res) => {
    try {
      const users = await prisma.account.findMany();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  });

// ADD USER
  app.post('/users', async (req, res) => {
    const { acc_fname, acc_lname, acc_email, acc_password } = req.body;
    
    try {
      const newUser = await prisma.account.create({
        data: {
          acc_fname,
          acc_lname,
          acc_email,
          acc_password
        }
      });
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  });

// DELETE USER WITH ID
  app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;

    try {
      await prisma.account.delete({
        where: {
          acc_id: id
        }
      });
      res.status(200).json({message: "ACCOUNT REMOVE SUCCESSFULLY" });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  });

  const port = 8080;

  app.listen(port, () => console.log(`Server is running on port ${port}`));
