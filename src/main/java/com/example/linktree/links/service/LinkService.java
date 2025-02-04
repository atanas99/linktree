package com.example.linktree.links.service;

import com.example.linktree.links.dto.LinkCreationDto;
import com.example.linktree.links.dto.LinkUpdateDto;
import com.example.linktree.links.entity.Link;
import com.example.linktree.links.repository.LinkRepository;
import com.example.linktree.users.entity.User;
import com.example.linktree.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.List;


@Service
@RequiredArgsConstructor
public class LinkService {

    private final LinkRepository linkRepository;
    private final UserRepository userRepository;

    public Link createLink(LinkCreationDto dto) {
        Link link = new Link();
        link.setName((dto.getName()));
        link.setUrl(dto.getUrl());
        User user = userRepository.findById(dto.getUser_id()).orElseThrow();
        link.setUser(user);
        return linkRepository.save(link);
    }

    public List<Link> getAllLinks() {
        return linkRepository.findAll();
    }

    public Link updateLink(LinkUpdateDto dto) {
        Link existingLink = linkRepository.findById(dto.getId()).orElseThrow();
        existingLink.setName(dto.getName());
        existingLink.setUrl(dto.getUrl());
        return linkRepository.save(existingLink);
    }

    public void deleteLink(BigInteger id) {
        linkRepository.deleteById(id);
    }
}
