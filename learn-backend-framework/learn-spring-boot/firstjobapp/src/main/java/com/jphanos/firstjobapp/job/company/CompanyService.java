package com.jphanos.firstjobapp.job.company;

import java.util.List;
import java.util.concurrent.ConcurrentMap;

public interface CompanyService {
    List<Company> getAllCompanies();
    boolean updateCompany(Long id, Company company);
    void createCompany(Company company);
}
