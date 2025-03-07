package com.example.linktree.products.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductCreationDto {
    @JsonProperty
    private String name;
    @JsonProperty
    private String url;
    @JsonProperty
    private String category;
    @JsonProperty
    private byte[] content;
}

