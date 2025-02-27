package com.example.linktree.users.service;

import com.example.linktree.links.repository.LinkRepository;
import com.example.linktree.users.dto.UserCreationDto;
import com.example.linktree.users.dto.UserUpdateDto;
import com.example.linktree.users.entity.User;
import com.example.linktree.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
                    user.setEmail(link.getUser().getEmail());
                    return user;
                })
                .orElse(null);
    }


    public User createUser(UserCreationDto dto) {
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setPassword(encoder.encode(dto.getPassword()));
        return userRepository.save(user);
    }

    public UserUpdateDto getEntityByEmail(String email) {
        User user = userRepository.findByEmail(email);

        UserUpdateDto userDto = new UserUpdateDto();
        userDto.setId(user.getId());
        userDto.setEmail(user.getEmail());
        userDto.setName(user.getName());
        userDto.setSurname(user.getSurname());
        userDto.setContent(user.getContent());
        return userDto;
    }
    public User updateUser(UserUpdateDto dto, MultipartFile file) throws IOException {

        User existingUser = userRepository.findById(dto.getId()).orElseThrow();

        if (dto.getPassword() != null) {
            existingUser.setPassword(encoder.encode(dto.getPassword()));
        }
        if (dto.getEmail() != null) {
            existingUser.setEmail(dto.getEmail());
        }
        if (dto.getName() != null) {
            existingUser.setName(dto.getName());
        }
        if (dto.getSurname() != null) {
            existingUser.setSurname(dto.getSurname());
        }
        if (file != null && !file.isEmpty()) {
            existingUser.setContent(file.getBytes());
            dto.setFileName(file.getOriginalFilename());
            dto.setSize(file.getSize());
        }

        return userRepository.save(existingUser);
    }
}
