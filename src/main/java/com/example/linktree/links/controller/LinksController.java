package com.example.linktree.links.controller;

import com.example.linktree.links.dto.LinkUpdateDto;
import com.example.linktree.links.entity.Link;
import com.example.linktree.links.service.LinkService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigInteger;
import java.util.List;

@RestController
@RequestMapping("/links")
@CrossOrigin()
@RequiredArgsConstructor
public class LinksController {

    private final LinkService linkService;

    @GetMapping("/all")
    public List<Link> getAllLinks() {
        return linkService.getAllLinks();
    }
    
    @PostMapping("/create/{id}")
    public List<Link> createLink(@PathVariable BigInteger id, @RequestBody List<LinkUpdateDto> links) {
        return linkService.updateLinks(id, links);
    }

    @DeleteMapping("/delete")
    public void deleteLink(@RequestBody BigInteger id) {
        linkService.deleteLink(id);
    }

    @GetMapping("/user/{id}")
    public List<Link> getLinksByUserId(@PathVariable BigInteger id) {
        return linkService.getLinksByUserId(id);
    }

}
