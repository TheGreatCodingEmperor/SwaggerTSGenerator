using Microsoft.AspNetCore.Mvc;
using SwaggerTSGenerator.Helpers;
using SwaggerTSGenerator.Models.Demo;
using Microsoft.EntityFrameworkCore;
using System.Reflection;
using System.Linq.Dynamic.Core;

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
    public virtual async Task<IActionResult> GetAll([FromQuery]string? Name,[FromQuery]int? PriceMax,[FromQuery]int? PriceMin, [FromQuery] SqlQueryRequestBase reuqest)
    {
        try
        {
            var query = _repositoryHelper.Queryable();
            // query = string.IsNullOrEmpty(name) ? query : query.Where(x => EF.Functions.Like(x.Name, $"%{name}%"));
            query = query.StartWith("Name",Name).Between("Price",PriceMax,PriceMin);
            var (count, list) = query.GetPageInOrder(reuqest);
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
