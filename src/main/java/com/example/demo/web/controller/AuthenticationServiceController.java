package com.example.demo.web.controller;

import com.example.demo.web.models.User;
import lombok.Data;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
@CrossOrigin("*")
public class AuthenticationServiceController {

    @PostMapping(value = "users/authenticate")
    public User authenticate(@RequestBody Logininfo logininfo  ) {

        if (logininfo.username.compareToIgnoreCase("Admin") == 0 &&
                logininfo.password.compareTo("password") == 0)
            return new User();
        else return null;
    }


}
@Data
class Logininfo {
    String username;
    String password;
}