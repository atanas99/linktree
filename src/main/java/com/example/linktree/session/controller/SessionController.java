package com.example.linktree.session.controller;


import com.example.linktree.session.service.SessionService;
import com.example.linktree.users.dto.UserUpdateDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/session")
@CrossOrigin()
public class SessionController {

    private final SessionService service;

    @GetMapping("/csrf-token")
    public CsrfToken getCSRFToken(HttpServletRequest request) {
        return (CsrfToken) request.getAttribute("_csrf");
    }

    @GetMapping("/sessionId")
    public String greet(HttpServletRequest request) {
        return "SessionID: " + request.getSession().getId() + System.lineSeparator();
    }

    @PostMapping("/login")
    public String login(@RequestBody UserUpdateDto user) throws JsonProcessingException {
        return service.verify(user);
    }

}
