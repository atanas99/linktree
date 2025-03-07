package com.example.linktree.products.controller;

import com.example.linktree.products.dto.ProductUpdateDto;
import com.example.linktree.products.entity.Product;
import com.example.linktree.products.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping("/products")
@CrossOrigin()
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;


    @PostMapping("/create/byUser/{id}")
    public List<Product> createLink(@PathVariable BigInteger id, @RequestBody List<ProductUpdateDto> products) {
        return productService.createProducts(id, products);
    }

    @DeleteMapping("/delete")
    public void deleteLink(@RequestBody BigInteger id) {
        productService.deleteProduct(id);
    }

    @GetMapping("get/byUser/{id}")
    public List<Product> getLinksByUserId(@PathVariable BigInteger id) {
        return productService.getProductByUserId(id);
    }
}
