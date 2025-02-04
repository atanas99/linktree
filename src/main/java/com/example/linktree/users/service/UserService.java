package com.example.linktree.users.service;

import com.example.linktree.links.repository.LinkRepository;
import com.example.linktree.users.dto.UserCreationDto;
import com.example.linktree.users.dto.UserUpdateDto;
import com.example.linktree.users.entity.User;
import com.example.linktree.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.math.BigInteger;

@Service
@RequiredArgsConstructor
public class UserService {

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    private final UserRepository userRepository;
    private final LinkRepository linkRepository;


    public UserUpdateDto getUserByLinkId(BigInteger id) {

        return linkRepository.findById(id)
                .map(link -> {
                    UserUpdateDto user = new UserUpdateDto();
                    user.setId(link.getUser().getId());
                    user.setUsername(link.getUser().getUsername());
                    return user;
                })
                .orElse(null);
    }


    public User createUser(UserCreationDto dto) {
        User user = new User();
        user.setUsername(dto.getUsername());
        user.setPassword(encoder.encode(dto.getPassword()));
        return userRepository.save(user);
    }
}
