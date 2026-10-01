using HabibaPortfolio.Api.Models;
using HabibaPortfolio.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace HabibaPortfolio.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IEmailService _emailService;
    private readonly ILogger<ContactController> _logger;

    public ContactController(IEmailService emailService, ILogger<ContactController> logger)
    {
        _emailService = emailService;
        _logger = logger;
    }

    [HttpPost]
    public async Task<IActionResult> Submit([FromBody] ContactRequest request)
    {
        if (!ModelState.IsValid)
            return BadRequest(ModelState);

        try
        {
            await _emailService.SendContactMessageAsync(request);
            return Ok(new { message = "Message sent successfully." });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Failed to send contact message.");
            return StatusCode(500, new { message = "Failed to send message. Please try again later." });
        }
    }
}
