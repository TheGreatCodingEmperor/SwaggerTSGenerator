using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SwaggerTSGenerator.Helpers;

namespace SwaggerTSGenerator.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CRUDBaseController<TKeyType,TEntity> : ControllerBase
where TKeyType : IComparable
where TEntity : class
{
    private readonly ILogger _logger;
    protected RepositoryHelper<TEntity> _repositoryHelper;

    public CRUDBaseController(
        DbContext context,
        ILogger logger
        )
    {
        _repositoryHelper = new(context);
        _logger = logger;
    }

    [HttpPost]
    public virtual async Task<IActionResult> Add(TEntity entity)
    {
        try
        {
            _repositoryHelper.Add(entity);
            _repositoryHelper.SaveChange();
            return Ok(new
            {
                Code = "0000",
                Message = "操作成功",
            });
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
    [HttpPut]
    public virtual async Task<IActionResult> Update(TKeyType key, TEntity entity)
    {
        try
        {
            TEntity? oriEntity = _repositoryHelper.Find(key);
            if(oriEntity==null){
                throw new Exception("Not Found");
            }
            _repositoryHelper.Update(entity);
            _repositoryHelper.SaveChange();
            return Ok(new
            {
                Code = "0000",
                Message = "操作成功",
            });
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
    [HttpDelete("{key}")]
    public virtual async Task<IActionResult> Remove(TKeyType key)
    {
        try
        {
            TEntity? oriEntity = _repositoryHelper.Find(key);
            if(oriEntity==null){
                throw new Exception("Not Found");
            }
            _repositoryHelper.Remove(oriEntity);
            _repositoryHelper.SaveChange();
            return Ok(new
            {
                Code = "0000",
                Message = "操作成功",
            });
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
