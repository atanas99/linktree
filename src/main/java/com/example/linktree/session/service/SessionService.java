package com.example.linktree.session.service;

import com.example.linktree.session.repository.SessionRepository;
import com.example.linktree.users.dto.UserCreationDto;
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

    private final SessionRepository repository;

    public String verify(UserCreationDto user) throws JsonProcessingException {
        Authentication authentication = authManager.authenticate(new UsernamePasswordAuthenticationToken(user.getUsername(), user.getPassword()));
        if (authentication.isAuthenticated()) {
            return jwtService.generateToken(user.getUsername());
        } else {
            return "fail";
        }
    }

}
