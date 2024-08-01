package com.jphanos.firstjobapp.job.company;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/companies")
public class CompanyController {
    private CompanyService companyService;

    public CompanyController(CompanyService companyService) {
        this.companyService = companyService;
    }

    @GetMapping
    public ResponseEntity<List<Company>> getCompanyService() {
        return new ResponseEntity<>(companyService.getAllCompanies(), HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCompany(@RequestBody Company company, @PathVariable Long id) {
        if (companyService.updateCompany(id, company)) {
            return new ResponseEntity<>("Company updated successfully", HttpStatus.OK);
        }
        return new ResponseEntity<>("Company not found", HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<String> createCompany(@RequestBody Company company) {
        companyService.createCompany(company);
        return new ResponseEntity<>("Company created successfully", HttpStatus.OK);
    }
}
