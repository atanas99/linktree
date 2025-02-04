package com.example.linktree.session.service;


import com.example.linktree.session.entity.SessionPrincipal;
import com.example.linktree.session.repository.SessionRepository;
import com.example.linktree.users.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MyDetailsService implements UserDetailsService {

    private final SessionRepository sessionRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = sessionRepository.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not Found");
        }
        return new SessionPrincipal(user);
    }

}
