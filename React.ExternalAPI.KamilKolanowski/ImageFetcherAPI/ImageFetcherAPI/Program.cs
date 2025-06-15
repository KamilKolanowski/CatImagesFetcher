using ImageFetcherAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace ImageFetcherAPI;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);
        var modelBuilder = new ModelBuilder();
        var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
        
        builder.Services.AddDbContext<ImageFetcherDbContext>(options =>
            options.UseSqlite(connectionString));

        builder.Services.AddControllers();
        
        var app = builder.Build();
        
        if (app.Environment.IsDevelopment())
        {
            app.MapOpenApi();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}