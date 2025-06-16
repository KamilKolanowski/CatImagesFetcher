using ImageFetcherAPI.Models;
using ImageFetcherAPI.Repositories;

namespace ImageFetcherAPI.Services;

public class CatsApi : ICatsApi
{
    private readonly ICatsRepository _repository;

    public CatsApi(ICatsRepository repository)
    {
        _repository = repository;
    }

    public async Task<IEnumerable<Cat>> GetAllCatsAsync()
    {
        return await _repository.GetAllCatsAsync();
    }

    public async Task<Cat?> GetCatAsync(string id)
    {
        return await _repository.GetCatByIdAsync(id);
    }

    public async Task CreateCatAsync(Cat cat)
    {
        await _repository.AddCatAsync(cat);
    }

    public async Task UpdateCatAsync(Cat cat)
    {
        await _repository.UpdateCatAsync(cat);
    }

    public async Task DeleteCatAsync(string id)
    {
        await _repository.DeleteCatAsync(id);
    }
}
