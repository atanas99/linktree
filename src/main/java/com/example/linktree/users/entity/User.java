package com.example.linktree.users.entity;

import com.example.linktree.links.entity.Link;
import com.example.linktree.products.entity.Product;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
import java.util.List;


@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "UserIdentity")
    @SequenceGenerator(name = "UserIdentity", sequenceName = "USER_ID_SEQ", allocationSize = 1)
    private BigInteger id;
    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String name;
    @Column
    private String surname;
    @Column
    private byte[] content;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Link> links;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Product> products;
}
