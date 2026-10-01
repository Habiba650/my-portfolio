using System.Net;
using System.Net.Mail;
using HabibaPortfolio.Api.Models;

namespace HabibaPortfolio.Api.Services;

public interface IEmailService
{
    Task SendContactMessageAsync(ContactRequest request);
}

public class EmailService : IEmailService
{
    private readonly IConfiguration _config;
    private readonly ILogger<EmailService> _logger;

    public EmailService(IConfiguration config, ILogger<EmailService> logger)
    {
        _config = config;
        _logger = logger;
    }

    public async Task SendContactMessageAsync(ContactRequest request)
    {
        var smtpHost = _config["Smtp:Host"];
        var smtpPort = int.Parse(_config["Smtp:Port"] ?? "587");
        var smtpUser = _config["Smtp:Username"];
        var smtpPass = _config["Smtp:Password"];
        var toEmail = _config["Smtp:ToEmail"];

        if (string.IsNullOrWhiteSpace(smtpUser) || string.IsNullOrWhiteSpace(smtpPass))
        {
            // No SMTP credentials configured yet — log instead of failing,
            // so the form still works during local development.
            _logger.LogWarning(
                "SMTP not configured. Contact message received from {Name} <{Email}>: {Message}",
                request.Name, request.Email, request.Message);
            return;
        }

        using var client = new SmtpClient(smtpHost, smtpPort)
        {
            Credentials = new NetworkCredential(smtpUser, smtpPass),
            EnableSsl = true,
        };

        var mail = new MailMessage
        {
            From = new MailAddress(smtpUser, "Habiba Portfolio — Contact Form"),
            Subject = $"New portfolio message from {request.Name}",
            Body = $"From: {request.Name} ({request.Email})\n\n{request.Message}",
            IsBodyHtml = false,
        };
        mail.To.Add(toEmail ?? smtpUser);
        mail.ReplyToList.Add(new MailAddress(request.Email, request.Name));

        await client.SendMailAsync(mail);
    }
}
