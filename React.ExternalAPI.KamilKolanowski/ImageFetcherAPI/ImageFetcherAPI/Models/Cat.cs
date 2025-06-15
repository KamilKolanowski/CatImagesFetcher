using System.ComponentModel.DataAnnotations;

namespace ImageFetcherAPI.Models;

public class Cat
{
    [Key]
    [Required]
    public string RowId { get; set; } = Guid.NewGuid().ToString();
    [Required]
    public string Id { get; set; } = String.Empty;
    [Required]
    public string Url { get; set; } = String.Empty;
    public string? Width { get; set; }
    public string? Height { get; set; }
    public string[]? Breeds { get; set; }
}