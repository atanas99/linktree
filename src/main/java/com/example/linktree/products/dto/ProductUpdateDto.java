package com.example.linktree.products.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductUpdateDto extends ProductCreationDto {
    @JsonProperty
    private BigInteger id;
    @JsonProperty
    private String fileName;
    @JsonProperty
    private long size;
}
