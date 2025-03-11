package com.example.linktree.users.controller;

import com.example.linktree.users.dto.UserCreationDto;
import com.example.linktree.users.dto.UserUpdateDto;
import com.example.linktree.users.entity.User;
import com.example.linktree.users.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigInteger;
import java.util.Map;

@RestController
@RequestMapping("/users")
@CrossOrigin()
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final ObjectMapper objectMapper;

    @PostMapping("/create")
    public User createUser(@RequestBody UserCreationDto user) {
        return this.userService.createUser(user);
    }

    @GetMapping("/get/byEmail/{email}")
    public ResponseEntity<UserUpdateDto> getUser(@PathVariable String email) {
        UserUpdateDto userDto = this.userService.getEntityByEmail(email);
        return ResponseEntity.ok(userDto);
    }

    @GetMapping("/get/byId/{id}")
    public ResponseEntity<UserUpdateDto> getUserById(@PathVariable BigInteger id) {
        UserUpdateDto userDto = this.userService.getUserById(id);
        return ResponseEntity.ok(userDto);
    }

    @PatchMapping(path = "/update", consumes = "multipart/form-data")
    public ResponseEntity<String> updateUser(@RequestParam Map<String, String> user, @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
        userService.updateUser(objectMapper.convertValue(user, UserUpdateDto.class), file);
        return ResponseEntity.ok("User updated successfully");
    }
    @GetMapping("/all")
    public BigInteger getAmountOfAllUsers() {
        return userService.getAllUsers();
    }
}
