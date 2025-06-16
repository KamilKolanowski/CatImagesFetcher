using ImageFetcherAPI.Data;
using ImageFetcherAPI.Repositories;
using ImageFetcherAPI.Services;
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
        builder.Services.AddScoped<ICatsRepository, CatsRepository>();
        builder.Services.AddScoped<ICatsApi, CatsApi>();
        var app = builder.Build();
        
        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}