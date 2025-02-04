package com.example.linktree.links.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LinkCreationDto {
    @JsonProperty
    private String name;
    @JsonProperty
    private String url;
    @JsonProperty
    private BigInteger user_id;
}

