package com.example.linktree.users.repository;

import com.example.linktree.users.entity.User;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;

@Repository
public interface UserRepository extends ListCrudRepository<User, BigInteger> {
    // You can add custom query methods here if needed
}
