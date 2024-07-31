package com.jphanos.firstjobapp.job.impl;

import com.jphanos.firstjobapp.job.Job;
import com.jphanos.firstjobapp.job.JobRepository;
import com.jphanos.firstjobapp.job.JobService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService {
    // private List<Job> jobs = new ArrayList<>();
    JobRepository jobRepository;
    private Long nextId = 1L;

    public JobServiceImpl(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    @Override
    public List<Job> findAll() {
        return jobRepository.findAll();
    }

    @Override
    public void createJob(Job job) {
        job.setJobId(nextId++);
        jobRepository.save(job);
    }

    @Override
    public Job getJobByID(Long id) {
        // Or else means if the object is not found you return a null.
        return jobRepository.findById(id).orElse(null);
    }

    @Override
    public boolean deleteByID(Long id) {
        try {
            jobRepository.deleteById(id); // Method provided by JPA
            return true;
        } catch (Exception err) {
            return false;
        }
    }

    @Override
    public boolean updateJob(Long id, Job updatedJob) {
        Optional<Job> jobOptional = jobRepository.findById(id);
        if (jobOptional.isPresent()) {
            Job job = jobOptional.get();
            job.setTitle(updatedJob.getTitle());
            job.setDescription(updatedJob.getDescription());
            job.setMinSalary(updatedJob.getMinSalary());
            job.setMaxSalary(updatedJob.getMaxSalary());
            job.setLocation(updatedJob.getLocation());
            return true;
        }
        return false;
    }
}
