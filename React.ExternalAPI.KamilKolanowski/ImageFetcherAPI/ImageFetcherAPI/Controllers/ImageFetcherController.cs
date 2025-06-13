using ImageFetcherAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace ImageFetcherAPI.Controllers;

[ApiController]
[Route("[controller]")]
public class ImageFetcherController : ControllerBase
{
    private readonly ILogger<ImageFetcherController> _logger;

    public ImageFetcherController(ILogger<ImageFetcherController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Cat> Get()
    {
        throw new NotImplementedException();
    }
}