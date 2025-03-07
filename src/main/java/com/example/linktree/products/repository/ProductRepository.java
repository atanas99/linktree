package com.example.linktree.products.repository;

import com.example.linktree.products.entity.Product;
import org.springframework.data.repository.ListCrudRepository;

import java.math.BigInteger;
import java.util.List;

public interface ProductRepository extends ListCrudRepository<Product, BigInteger> {
    List<Product> findByUserId(BigInteger id);
}
