package com.example.linktree.users.dto;

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
public class UserCreationDto {
    @JsonProperty
    private String email;
    @JsonProperty
    private String password;
    @JsonProperty
    private String name;
    @JsonProperty
    private String surname;
}
