package com.jphanos.firstjobapp.job;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobController {
    // Create the instance of the interface so that we can use the methods created for the service.
    // jobService is not initialized but marking the jobService implementation with @Service will
    // make it initialized at runtime and there is now need to initialize.
    private JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/jobs")
    public List<Job> findAll() {
        return jobService.findAll();
    }

    @PostMapping("/jobs")
    public String createJob(@RequestBody Job job) {
        jobService.createJob(job);
        return "Job created successfully";
    }
}

/*

 GET /jobs: Get all jobs
 GET /jobs/{id}: Get a specific job by ID
 POST /jobs: Create a new job (request body should contain the job details)
 DELETE /jobs/{id}: Delete a specific job by ID.
 PUT /jobs/{id}: Update a specific job by ID (request body should contain the updated job)4

 Example API URLs:
 GET {base_url}/jobs
 GET {base_url}/jobs/1
 POST {base_urls}/jobs
 DELETE {base_url}/jobs/1
 PUT {base_url}/jobs/1

*/