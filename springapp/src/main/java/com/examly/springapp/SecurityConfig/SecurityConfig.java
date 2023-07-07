// package com.examly.springapp.SecurityConfig;

// import java.beans.JavaBean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.context.annotation.Bean;
// import org.springframework.security.config.annotation.web.AbstractRequestMatcherRegistry;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.web.SecurityFilterChain;


// @Configuration
// @EnableWebSecurity
// public class SecurityConfig {
    
//     @Bean
//     protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
//         http
//             .authorizeHttpRequests(authz->authz
//                 .antMatchers("").hasRole("")
//                 .antMatchers("").permitAll()  
//                 .anyRequest().authenticated())
//             .formLogin(login->login
//                 .loginPage("")                 // loginPage("/login")
//                 .failureUrl("")                // failureUrl("/login?error")
//                 .loginProcessingUrl("")
//                 .defaultSuccessUrl(""))
//             .logout(logout->logout.logoutSuccessUrl("")
//                 .permitAll());

//         return http.build();
//     }

// }
