package com.leilao.back.service;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;

import com.leilao.back.model.Person;
import com.leilao.back.repository.PersonRepository;

import jakarta.mail.MessagingException;

@Service
public class PersonService {

    @Autowired // deixa para q o spring crie os objetos
    private PersonRepository personRepository;

    public Person create(Person person) {
        Person personSaved = personRepository.save(person);
        Context context = new Context();
        context.setVariable("name", personSaved.getName());
        try {
            EmailService.sendTemplateEmail(personSaved.getEmail(), "Cadastro Efetuado com Sucesso", null,
                    "emailWelcome");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        return personRepository.save(person);
    }

    public Person update(Person person) {
        // return profileRepository.save(profile);
        Person personsaved = personRepository.findById(person.getId())
                .orElseThrow(() -> new NoSuchElementException("Objeto não encontrado"));
        personsaved.setName(person.getName());
        personsaved.setEmail(person.getEmail());
        return personRepository.save(personsaved);
    }

    public void delete(Long id) {
        Person personsaved = personRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("objeto não encontrado"));
        personRepository.delete(personsaved);
    }

    public List<Person> listAll() {
        return personRepository.findAll();
    }

}
