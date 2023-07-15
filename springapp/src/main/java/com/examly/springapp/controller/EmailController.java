package com.examly.springapp.controller;

import com.examly.springapp.service.EmailSenderService;
import com.examly.springapp.model.EmailModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import javax.mail.MessagingException;

@RestController
@RequestMapping("/email")
public class EmailController {

    private final EmailSenderService emailSenderService;

    @Autowired
    public EmailController(EmailSenderService emailSenderService) {
        this.emailSenderService = emailSenderService;
    }

    @PostMapping("/send-email")
    public void sendEmail(@RequestBody EmailModel emailModel) {
        try {
            if (emailModel.getToEmail() != null && !emailModel.getToEmail().isEmpty()) {
                if (emailModel.getAttachment() != null && !emailModel.getAttachment().isEmpty()) {
                    sendEmailWithAttachment(emailModel);
                } else {
                    sendSimpleEmail(emailModel);
                }
                System.out.println("Mail Sent...");
            } else {
                System.out.println("Invalid recipient email address.");
            }
        } catch (MessagingException e) {
            System.out.println("Error sending email: " + e.getMessage());
        }
    }

    private void sendSimpleEmail(EmailModel emailModel) throws MessagingException {
        emailSenderService.sendSimpleEmail(
                emailModel.getToEmail(),
                emailModel.getBody(),
                emailModel.getSubject()
        );
    }

    private void sendEmailWithAttachment(EmailModel emailModel) throws MessagingException {
        emailSenderService.sendEmailWithAttachment(
                emailModel.getToEmail(),
                emailModel.getBody(),
                emailModel.getSubject(),
                emailModel.getAttachment()
        );
    }
}