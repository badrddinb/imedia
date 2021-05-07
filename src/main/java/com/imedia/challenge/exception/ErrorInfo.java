package com.imedia.challenge.exception;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Date;

public class ErrorInfo {
    @JsonProperty
    private String message;

    @JsonProperty("timestamp")
    private Date timestamp;

    @JsonProperty("uri")
    private String uriRequested;

    public ErrorInfo(Exception exception, String uriRequested) {
        this.message = exception.toString();
        this.uriRequested = uriRequested;
        this.timestamp = new Date();
    }

    public String getMessage() {
        return message;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String getUriRequested() {
        return uriRequested;
    }
}
