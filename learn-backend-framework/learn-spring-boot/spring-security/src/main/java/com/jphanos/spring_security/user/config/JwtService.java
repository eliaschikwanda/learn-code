package com.jphanos.spring_security.user.config;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.function.Function;

@Service
public class JwtService {
    private static final String SECRET_KEY = "WZU1R4OaGqg4YSM1uvYnyY+pYd2XJ4P7JR7cwuHH1Ei8BxXzWPJINjrFQPakTFlI";

    // Generate token out of the current user without extra claims --> 3
    public String generateToken(UserDetails userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    // Methods to generate a token out of extra claims and user details --> 2
    public String generateToken(
            // The Map of string object will contain the claims or extra claims to add in the tokens
            Map<String, Object> extraClaims,
            UserDetails userDetails
    ) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                // The subject should the username (in this case the email) and it should be set
                .setSubject(userDetails.getUsername())
                // attach the date the token was created
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                // Already created before
                .signWith(getSignInkey())
                .signWith(getSignInkey(), SignatureAlgorithm.HS256)
                .compact();
    }

    // Methods to validate the toke --> 4
    public boolean isTokenValid(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        // Check if the token belongs to the user
        return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
    }

    // Check if the token is expired
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token) {
        // Once you have the extract claims method you can get any field that has been on the token
        return extractClaim(token, Claims::getExpiration);
    }

    // Extract username(email) methods --> 1
    public String extractUsername(String token) {
        // The subject should be the username of the user which in this case is the email
        return extractClaim(token, Claims::getSubject);
    }

    public  <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignInkey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSignInkey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
