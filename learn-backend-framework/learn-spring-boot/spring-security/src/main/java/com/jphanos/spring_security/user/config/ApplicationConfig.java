package com.jphanos.spring_security.user.config;

import com.jphanos.spring_security.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    private final UserRepository userRepository;
    @Bean
    public UserDetailsService userDetailsService() {
        // The username is the argument we're providing
        return username -> userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
}
