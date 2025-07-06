package com.library.repository;

import java.util.Arrays;
import java.util.List;

public class BookRepository {

    public List<String> getAllBooks() {
        return Arrays.asList("The Alchemist", "1984", "Clean Code");
    }
}
