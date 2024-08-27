package com.jphanos.spring_security.user.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    // When the application starts Spring Security try to look for a bean of type security filter chain
    // This bean will be responsible for configuring the security of our application
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable) // Disable CSRF protection
                .authorizeHttpRequests(auth -> auth
                        // Define which URLs should be accessible without authentication
                        .requestMatchers(new AntPathRequestMatcher("/login"), new AntPathRequestMatcher("/register"))
                        .permitAll()
                        // Authenticate all other requests
                        .anyRequest()
                        .authenticated()
                )
                .sessionManagement(session -> session
                        // Set session management to stateless
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                // Set the authentication provider
                .authenticationProvider(authenticationProvider)
                // Add the JWT authentication filter before the UsernamePasswordAuthenticationFilter
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
