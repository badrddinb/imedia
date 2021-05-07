package com.imedia.challenge.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RestControllerAdvice(basePackages = { "com.imedia.challenge.controller" })
public class GlobalExceptionHandler {
    private ResponseEntity<ErrorInfo> error(final Exception exception, final HttpStatus httpStatus,
                                            HttpServletRequest request) {
        return new ResponseEntity<>(new ErrorInfo(exception, request.getRequestURI()), httpStatus);
    }

    @ExceptionHandler(RuntimeException.class)
    public ResponseEntity<ErrorInfo> handleRuntimeException(HttpServletRequest request, final RuntimeException e) {
        return error(e, HttpStatus.NOT_FOUND, request);
    }
}
