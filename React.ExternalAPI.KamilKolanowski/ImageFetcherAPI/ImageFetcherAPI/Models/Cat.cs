using System.ComponentModel.DataAnnotations;

namespace ImageFetcherAPI.Models;

public class Cat
{
    [Key]
    [Required]
    [StringLength(100)]
    public string RowId { get; set; } = Guid.NewGuid().ToString();

    [Required]
    [StringLength(30)]
    public string Id { get; set; } = String.Empty;
    
    [Required]
    [StringLength(100)]
    public string Url { get; set; } = String.Empty;
    
    [StringLength(6)]
    public string? Width { get; set; }
    
    [StringLength(6)]
    public string? Height { get; set; }
    public string[]? Breeds { get; init; }
}
