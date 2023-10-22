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
        res.status(200).send(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/:id/apply', async (req, res) => {
    try {
        const jobId = req.params.id;
        const user = req.body.userEmail;

        const job = await Job.findById(jobId);
        if(!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        job.applicants.push(user);
        await job.save();
        res.status(200).json({ message: 'Application submitted successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
})

app.listen(port, () => {
    console.log(`Server stared on port, ${port}`);
})