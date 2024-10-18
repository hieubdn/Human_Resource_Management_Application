package com.example.hrm_backend.service;

import com.example.hrm_backend.model.Applicant;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ApplicantService {

    private List<Applicant> applicants = new ArrayList<>();

    public Applicant addApplicant(Applicant applicant) {
        applicants.add(applicant);
        return applicant;
    }

    public List<Applicant> getAllApplicants() {
        return applicants;
    }
}
