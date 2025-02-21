package com.example.linktree.users.controller;

import com.example.linktree.users.dto.UserCreationDto;
import com.example.linktree.users.dto.UserUpdateDto;
import com.example.linktree.users.entity.User;
import com.example.linktree.users.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;

@RestController
@RequestMapping("/users")
@CrossOrigin()
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping("/link{id}")
    public UserUpdateDto getUserByLinkId(@PathVariable BigInteger id) {
        return userService.getUserByLinkId(id);
    }

    @PostMapping("/create")
    public User createUser(@RequestBody UserCreationDto user) {
        return this.userService.createUser(user);
    }
}
