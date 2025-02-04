package com.example.linktree.links.entity;

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


@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "links")
public class Link {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "LinkIdentity")
    @SequenceGenerator(name = "LinkIdentity", sequenceName = "LINK_ID_SEQ", allocationSize = 1)
    private BigInteger id;
    @Column
    private String name;
    @Column
    private String url;

    @ManyToOne
    @JsonBackReference
    private User user;

}
