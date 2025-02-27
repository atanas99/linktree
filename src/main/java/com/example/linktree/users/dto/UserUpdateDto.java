package com.example.linktree.users.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigInteger;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdateDto extends UserCreationDto {
    @JsonProperty
    private BigInteger id;
    @JsonProperty
    private byte[] content;
    @JsonProperty
    private String fileName;
    @JsonProperty
    private long size;

}
