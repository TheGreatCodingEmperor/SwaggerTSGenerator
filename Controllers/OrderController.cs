using Microsoft.AspNetCore.Mvc;
using SwaggerTSGenerator.Helpers;
using SwaggerTSGenerator.Models.Demo;
using Microsoft.EntityFrameworkCore;

namespace SwaggerTSGenerator.Controllers;

[ApiController]
[Route("api/[controller]")]
public class OrderController : CRUDBaseController<int, Order>
{
    private readonly ILogger<OrderController> _logger;

    public OrderController(
        DemoContext context,
        ILogger<OrderController> logger
        ) : base(context, logger)
    {
        _logger = logger;
    }

    [ProducesResponseType(typeof(OrderResult), StatusCodes.Status200OK)]
    [HttpGet]
    public virtual async Task<IActionResult> GetAll(string? name,int page, int pageSize)
    {
        try
        {
            var query = _repositoryHelper.Queryable();
            query = string.IsNullOrEmpty(name)?query: query.Where(x => EF.Functions.Like(x.Name,$"%{name}%"));
            var (count, list) = PaginatorHelper.GetPage<Order>(query, page, pageSize);
            return Ok(new { Count = count, List = list });
        }
        catch (Exception ex)
        {
            return BadRequest(
                new
                {
                    Code = "7000",
                    Message = ex.Message,
                }
            );
        }
    }
}
public class OrderResult
{
    public int Count { get; set; }
    public List<Order> List { get; set; }
}
