package com.jphanos.firstjobapp.job.company.impl;

import com.jphanos.firstjobapp.job.company.Company;
import com.jphanos.firstjobapp.job.company.CompanyRepository;
import com.jphanos.firstjobapp.job.company.CompanyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyServiceImpl implements CompanyService {
    private CompanyRepository companyRepository;

    public CompanyServiceImpl(CompanyRepository companyRepository) {
        this.companyRepository = companyRepository;
    }
    @Override
    public List<Company> getAllCompanies() {
        return companyRepository.findAll();
    }
}
