package com.example.linktree.products.service;

import com.example.linktree.products.dto.ProductUpdateDto;
import com.example.linktree.products.entity.Product;
import com.example.linktree.products.repository.ProductRepository;
import com.example.linktree.users.entity.User;
import com.example.linktree.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;


    public List<Product> createProducts(BigInteger id, List<ProductUpdateDto> products) {
        List<Product> userProducts = productRepository.findByUserId(id);
        for (Product product : userProducts) {
            productRepository.delete(product);
        }

        List<Product> processedProducts = new ArrayList<>();
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        for (ProductUpdateDto dto : products) {
            Product newProduct = new Product();
            newProduct.setName(dto.getName());
            newProduct.setUrl(dto.getUrl());
            newProduct.setContent(dto.getContent());
            newProduct.setCategory(dto.getCategory());
            newProduct.setUser(user);

            processedProducts.add(productRepository.save(newProduct));
        }
        return processedProducts;
    }

    public List<Product> getProductByUserId(BigInteger userId) {
        return productRepository.findByUserId(userId);
    }

    public void deleteProduct(BigInteger id) {
        productRepository.deleteById(id);
    }


}
