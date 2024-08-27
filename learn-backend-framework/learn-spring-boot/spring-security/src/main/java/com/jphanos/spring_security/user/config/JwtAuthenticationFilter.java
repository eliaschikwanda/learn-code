package com.jphanos.spring_security.user.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request, // We can intercept every part of our request
            @NonNull HttpServletResponse response, // We can also add data to some part of our response
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {
        // Checking if the jwt token is available
        // The token is contained in the head called Authorization
        final String authHeader = request.getHeader("Authorization");
        final String jwtToken;
        final String userEmail;

        // Next check the token for early return if it's not valid
        // Check if there is something in the authHeader
        // the authHeader also starts with the word `Bearer ` --> 7 chars
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            // Pass the request and response to the next filter since it failed already
            filterChain.doFilter(request, response);
            // do not continue executing the rest of the code
            return;
        }
        // Next thing is the authHeader is valid extract the token from the authHeader
        jwtToken = authHeader.substring(7);
        // Extract the userEmail from the jwToken
        userEmail = jwtService.extractUsername(jwtToken);// todo extract user email

    }
}
