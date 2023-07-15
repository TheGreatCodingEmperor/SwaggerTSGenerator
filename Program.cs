using Microsoft.AspNetCore.SpaServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSwaggerGen();
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "ClientApp/dist";
});

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseHttpsRedirection();
app.UseStaticFiles();
if (!app.Environment.IsDevelopment())
{
    app.UseSpaStaticFiles();
}

app.UseRouting();

if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.DocumentTitle = "Swagger UI - QuickApp";
        // c.SwaggerEndpoint("/swagger/v1/swagger.json", $"{IdentityServerConfig.ApiFriendlyName} V1");
        // c.OAuthClientId(IdentityServerConfig.SwaggerClientID);
        c.OAuthClientSecret("no_password"); //Leaving it blank doesn't work
    });

    // app.UseSwagger();
    // app.UseSwaggerUI(options =>
    // {
    //     options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    //     options.RoutePrefix = string.Empty;
    // });
}

// app.MapControllerRoute(
//     name: "default",
//     pattern: "{controller}/{action=Index}/{id?}");
app.UseEndpoints(endpoints =>
{
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller}/{action=Index}/{id?}");
});


// else{
//     app.MapFallbackToFile("index.html");
// }
app.UseSpa(builder =>
{
    builder.Options.SourcePath = "ClientApp";
    if (app.Environment.IsDevelopment())
    {
        builder.UseProxyToSpaDevelopmentServer("http://localhost:4200/");
    }
});
app.Run();
