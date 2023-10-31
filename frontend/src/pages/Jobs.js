import React, { useEffect, useState } from "react";
import { Navbar } from "../components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const [user, setUser] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://beekin-job-board.onrender.com/jobs"
    );
    console.log(response.data);
    setJobs(response.data);
    setLoading(false);
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
        {loading === false ? (
          jobs.map((job) => (
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
          ))
        ) : (
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            minHeight={"100vh"}
            flexDirection={"column"}
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            <Text fontSize={"2xl"}>Fetching jobs...</Text>
          </Flex>
        )}
      </Flex>
    </div>
  );
};

export default Jobs;
