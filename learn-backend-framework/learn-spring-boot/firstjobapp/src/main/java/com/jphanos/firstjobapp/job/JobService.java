package com.jphanos.firstjobapp.job;

import java.util.List;

public interface JobService {
    List<Job> findAll();
    void createJob(Job job);

    Job getJobByID(Long id);
    Job deleteByID(Long id);
}
