# React Auth

This project showcases how to store user auth tokens like a JWT token using React context.

The main issue to solve is how to persis the token through page reloads sine context does not usually persist. To get arround this we are storing the token in local storage and reading from it.
