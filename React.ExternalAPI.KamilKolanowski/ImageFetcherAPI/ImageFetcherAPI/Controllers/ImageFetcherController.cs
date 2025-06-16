using ImageFetcherAPI.Models;
using ImageFetcherAPI.Repositories;
using ImageFetcherAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace ImageFetcherAPI.Controllers;

[ApiController]
[Route("api")]
public class ImageFetcherController : ControllerBase
{
    private readonly ILogger<ImageFetcherController> _logger;
    private readonly CatSyncService _catSyncService;
    private readonly ICatsRepository _repository;

    public ImageFetcherController(ILogger<ImageFetcherController> logger, CatSyncService catSyncService, ICatsRepository repository)
    {
        _logger = logger;
        _repository = repository;
        _catSyncService = catSyncService;
    }

    [HttpPost("sync")]
    public async Task<IActionResult> SyncCats()
    {
        await _catSyncService.SyncCatsAsync();
        return Ok("Synced");
    }

    [HttpGet("cats")]
    public async Task<ActionResult<IEnumerable<Cat>>> GetCats()
    {
        var cats = await _repository.GetAllCatsAsync();
        return Ok(cats);
    }
}
