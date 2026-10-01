using HabibaPortfolio.Api.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IEmailService, EmailService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowPortfolioClient", policy =>
    {
        var extra = (builder.Configuration["AllowedOrigins"] ?? "")
            .Split(',', StringSplitOptions.RemoveEmptyEntries | StringSplitOptions.TrimEntries);

        policy.SetIsOriginAllowed(origin =>
                  origin == "http://localhost:5173" ||
                  extra.Contains(origin) ||
                  (Uri.TryCreate(origin, UriKind.Absolute, out var uri) && uri.Host.EndsWith(".vercel.app")))
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Cloud hosts (Railway/Render/...) provide the port through the PORT variable
var port = Environment.GetEnvironmentVariable("PORT");
builder.WebHost.UseUrls(port is null ? "http://localhost:5080" : $"http://0.0.0.0:{port}");

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowPortfolioClient");
app.UseAuthorization();
app.MapControllers();

app.Run();
