using ImageFetcherAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace ImageFetcherAPI.Data;

public class ImageFetcherDbContext : DbContext
{
    public ImageFetcherDbContext(DbContextOptions<ImageFetcherDbContext> options) : base(options)
    { }
    
    public DbSet<Cat> Cats { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.HasDefaultSchema("TCSA");
        base.OnModelCreating(modelBuilder);
    }
}