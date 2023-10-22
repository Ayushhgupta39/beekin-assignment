import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Flex } from "@chakra-ui/react";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    const response = await axios.get("http://localhost:8080/jobs");
    console.log(response.data);
    setJobs(response.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div>
      <Navbar user={user} />
      <Flex
        width={["full", "full", "", ""]}
        flexDirection={["column", "column", "row", "row"]}
        flexWrap={"wrap"}
        justifyContent={"center"}
        gap={"2"}
        rowGap={"4"}
      >
        {jobs.map((job) => (
          <JobCard
            key={job._id}
            id={job._id}
            company={job.company}
            description={job.description}
            title={job.title}
            experience={job.experience}
            jobType={job.jobType}
            location={job.location}
            salary={job.salary}
            benefits={job.benefits}
            applicants={job.applicants}
          />
        ))}
      </Flex>
    </div>
  );
};

export default Jobs;
