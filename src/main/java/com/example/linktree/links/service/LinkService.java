package com.example.linktree.links.service;

import com.example.linktree.links.dto.LinkUpdateDto;
import com.example.linktree.links.entity.Link;
import com.example.linktree.links.repository.LinkRepository;
import com.example.linktree.users.entity.User;
import com.example.linktree.users.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class LinkService {

    private final LinkRepository linkRepository;
    private final UserRepository userRepository;

    public List<Link> getAllLinks() {
        return linkRepository.findAll();
    }

    public List<Link> updateLinks(BigInteger id, List<LinkUpdateDto> links) {
        List<Link> userLinks = linkRepository.findByUserId(id);
        for (Link link : userLinks) {
            linkRepository.delete(link);
        }

        List<Link> processedLinks = new ArrayList<>();
        User user = userRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("User not found"));
        for (LinkUpdateDto dto : links) {
            Link newLink = new Link();
            newLink.setName(dto.getName());
            newLink.setUrl(dto.getUrl());
            newLink.setUser(user);
            processedLinks.add(linkRepository.save(newLink));
        }
        return processedLinks;
    }

    public void deleteLink(BigInteger id) {
        linkRepository.deleteById(id);
    }

    public List<Link> getLinksByUserId(BigInteger userId) {
        return linkRepository.findByUserId(userId);
    }

}
