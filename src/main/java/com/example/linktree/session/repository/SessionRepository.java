package com.example.linktree.session.repository;

import com.example.linktree.users.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface SessionRepository extends JpaRepository<User, BigInteger> {
    User findByEmail(String email);
}
