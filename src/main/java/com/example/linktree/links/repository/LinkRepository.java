package com.example.linktree.links.repository;

import com.example.linktree.links.entity.Link;
import org.springframework.data.repository.ListCrudRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;

@Repository
public interface LinkRepository extends ListCrudRepository<Link, BigInteger> {
    List<Link> findByUserId(BigInteger id);
}
