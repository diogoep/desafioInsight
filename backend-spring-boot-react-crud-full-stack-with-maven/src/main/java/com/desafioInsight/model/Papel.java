package com.desafioInsight.model;

import org.springframework.security.core.GrantedAuthority;

public enum Papel implements GrantedAuthority {
    ESTUDANTE("Estudante"), ADMIN("Adminitrador");

    private String nome;

    Papel(String nome){
        this.nome=nome;
    }

    public String getNome() {
        return nome;
    }

    @Override
    public String getAuthority() {
        return this.toString();
    }
}
