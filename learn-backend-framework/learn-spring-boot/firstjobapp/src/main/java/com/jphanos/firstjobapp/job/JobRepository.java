package com.jphanos.firstjobapp.job;

import org.springframework.data.jpa.repository.JpaRepository;

// The Job is to use with the Job Entity and Long is the data type of the primary key
// No implementation is needed for this interface we just define it like this
public interface JobRepository extends JpaRepository<Job, Long> {
}
