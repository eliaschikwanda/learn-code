package com.jphanos.firstjobapp.job;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// @RequestMapping can be used to set the base URL of that class if used at class level
@RestController
@RequestMapping("/jobs")
public class JobController {
    // Create the instance of the interface so that we can use the methods created for the service.
    // jobService is not initialized but marking the jobService implementation with @Service will
    // make it initialized at runtime and there is now need to initialize.
    private JobService jobService;

    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    @GetMapping
    public ResponseEntity<List<Job>> findAll() {
        return new ResponseEntity<>(jobService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> createJob(@RequestBody Job job) {
        jobService.createJob(job);
        return new ResponseEntity<>("Job created successfully", HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Job> getJobById(@PathVariable Long id) {
        Job job = jobService.getJobByID(id);
        if (job == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(job, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteJob(@PathVariable Long id) {
        boolean deleted = jobService.deleteByID(id);
        if (!deleted) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Job deleted successfully", HttpStatus.OK);
    }

    // @RequestMapping(value = "/jovs/{id}", method = RequestMethod.PUT) --> Request Mappin can also be used.
    @PutMapping("/{id}")
    public ResponseEntity<String> updateJob (@PathVariable Long id, @RequestBody Job updatedJob) {
        boolean updated = jobService.updateJob(id, updatedJob);
        if (updated) {
            return new ResponseEntity<>("Updated successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Failed to update", HttpStatus.NOT_FOUND);
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