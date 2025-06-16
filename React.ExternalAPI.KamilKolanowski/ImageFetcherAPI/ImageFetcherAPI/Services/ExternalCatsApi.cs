using ImageFetcherAPI.Models;
using Microsoft.Extensions.Options;

namespace ImageFetcherAPI.Services;

public class ExternalCatsApi
{
    private readonly string _baseUrlWithKey;
    private readonly HttpClient _httpClient;

    public ExternalCatsApi(IOptions<ApiSettings> options)
    {
        var settings = options.Value;
        _httpClient = new HttpClient { BaseAddress = new Uri(settings.BaseUrl) };

        _httpClient.DefaultRequestHeaders.Add("x-api-key", settings.ApiKey);
    }

    public Task<IEnumerable<Cat>?> GetAllCatsAsync()
    {
        return _httpClient.GetFromJsonAsync<IEnumerable<Cat>>("");
    }

    public Task<Cat?> GetCatAsync(string id)
    {
        return _httpClient.GetFromJsonAsync<Cat>($"{_baseUrlWithKey}/{id}");
    }
}
