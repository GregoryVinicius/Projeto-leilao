package com.leilao.back.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leilao.back.model.Profile;
import com.leilao.back.repository.ProfileRepository;

@Service
public class ProfileService {

    @Autowired // deixa para q o spring crie os objetos
    private ProfileRepository profileRepository;

    public Profile create(Profile profile) {
        return profileRepository.save(profile);
    }

    public Profile update(Profile profile) {
        // return profileRepository.save(profile);
        Profile profilesaved = profileRepository.findById(profile.getId())
                .orElseThrow(() -> new NoSuchElementException("Objeto não encontrado"));
        profilesaved.setName(profile.getName());
        return profileRepository.save(profilesaved);
    }

    public void delete(Long id) {
        Profile profilesaved = profileRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("objeto não encontrado"));
        profileRepository.delete(profilesaved);
    }

    public List<Profile> listAll() {
        return profileRepository.findAll();
    }

}
