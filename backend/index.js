const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
require("dotenv").config();
const port = process.env.PORT;
const Job = require("./models/jobModel");

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

app.get("/jobs", async (req, res) => {
    try {
        const jobs = await Job.find();
        res.send(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post("/jobs", async (req, res) => {
    try {
        const { title, company } = req.body;
        const newJob = new Job({ title, company });
        await newJob.save();
        res.status(200).json({ message: "Job sent" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Job not sent"});
    }
})

app.listen(port, () => {
    console.log(`Server stared on port, ${port}`);
})