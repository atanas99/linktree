package com.example.linktree.products.entity;

import com.example.linktree.users.entity.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ProductIdentity")
    @SequenceGenerator(name = "ProductIdentity", sequenceName = "PRODUCT_ID_SEQ", allocationSize = 1)
    private BigInteger id;
    @Column
    private String name;
    @Column
    private String url;
    @Column
    private String category;
    @Column
    private byte[] content;
    
    @ManyToOne
    @JsonBackReference
    private User user;
}