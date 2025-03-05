package com.example.linktree.session.service;

import com.example.linktree.users.dto.UserUpdateDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SessionService {

    private final JWTService jwtService;

    private final AuthenticationManager authManager;


    public String verify(UserUpdateDto user) throws JsonProcessingException {
        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(user.getEmail());
        } else {
            return "fail";
        }
    }
    ///TokenUserID
    /*public String verify(UserUpdateDto user) throws JsonProcessingException {
        try {
            Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
            if (authentication.isAuthenticated()) {
                BigInteger userId = userService.findUserIdByEmail(user.getEmail());
                if (userId != null) {
                    user.setId(userId);
                    return jwtService.generateToken(user.getId().toString());
                } else {
                    return "User not found";
                }
            } else {
                return "fail";
            }
        } catch (AuthenticationException e) {
            return "fail";
        }
    }*/
}
