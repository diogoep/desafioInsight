package com.desafioInsight.jwt;

@SuppressWarnings("serial")
public class AuthenticationException extends RuntimeException {
    public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}

