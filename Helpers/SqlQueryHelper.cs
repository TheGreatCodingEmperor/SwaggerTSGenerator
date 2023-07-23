using System.Linq.Dynamic.Core;
using System.Reflection;
using Newtonsoft.Json;

namespace SwaggerTSGenerator.Helpers;
public static class SqlQueryHelper
{
    public static IQueryable<T> Eq<T>(this IQueryable<T> queryable, string field, object? value)
    {
        return value == null ? queryable : queryable.Where($"{field} = @0", value);
    }
    public static IQueryable<T> NotEq<T>(this IQueryable<T> queryable, string field, object? value)
    {
        return value == null ? queryable : queryable.Where($"{field} != @0", value);
    }
    public static IQueryable<T> Like<T>(this IQueryable<T> queryable, string field, object? value)
    {
        return value == null ? queryable : queryable.Where($"{field}.Contains(@0)", value);
    }
    public static IQueryable<T> StartWith<T>(this IQueryable<T> queryable, string field, object? value)
    {
        return value == null ? queryable : queryable.Where($"{field}.StartsWith(@0, StringComparison.OrdinalIgnoreCase)", value);
    }
    public static IQueryable<T> Lg<T>(this IQueryable<T> queryable, string field, object? value)
    {
        queryable = value == null ? queryable : queryable.Where($"{field} > @0", value);
        return queryable;
    }
    public static IQueryable<T> LgEq<T>(this IQueryable<T> queryable, string field, object? value)
    {
        queryable = value == null ? queryable : queryable.Where($"{field} >= @0", value);
        return queryable;
    }
    public static IQueryable<T> Lt<T>(this IQueryable<T> queryable, string field, object? value)
    {
        queryable = value == null ? queryable : queryable.Where($"{field} < @0", value);
        return queryable;
    }
    public static IQueryable<T> LtEq<T>(this IQueryable<T> queryable, string field, object? value)
    {
        queryable = value == null ? queryable : queryable.Where($"{field} <= @0", value);
        return queryable;
    }
    public static IQueryable<T> Between<T>(this IQueryable<T> queryable, string field, object? valueMax, object? valueMin)
    {
        queryable = valueMin == null ? queryable : queryable.Where($"{field} <= @0", valueMax);
        queryable = valueMax == null ? queryable : queryable.Where($"{field} >= @0", valueMin);
        return queryable;
    }


    public static (int count, List<T> list) GetPageInOrder<T>(this IQueryable<T> queryable, SqlQueryRequestBase request)
    {
        queryable = queryable.OrderByName(request.OrderBy, request.OrderDesc);
        return queryable.GetPage<T>(request.Page, request.PageSize);
    }
    public static (int count, List<T> list) GetPage<T>(this IQueryable<T> queryable, int page, int pageSize)
    {
        int count = queryable.Count();
        if (page == -1 && pageSize == -1)
        {
            return (count, queryable.ToList());
        }
        else
        {
            if (page < 1)
            {
                throw new Exception("Page Cant Lower Than 1");
            }
            if (pageSize < 1)
            {
                throw new Exception("PageSize Cant Lower Than 1");
            }
            return (count, queryable.Skip((page - 1) * pageSize).Take(pageSize).ToList());
        }
    }
    public static IQueryable<T> OrderByName<T>(this IQueryable<T> queryable, string? orderBy, Boolean? orderDesc)
    {
        if (string.IsNullOrEmpty(orderBy))
        {
            return queryable;
        }
        else
        {
            if (orderDesc == true)
            {
                queryable = queryable.OrderBy($"{orderBy} descending");
            }
            else
            {
                queryable = queryable.OrderBy(orderBy);
            }
            return queryable;
        }
    }
}

public class SqlQueryRequestBase
{
    [JsonProperty(PropertyName="page")]
    public int Page { get; set; }
    [JsonProperty(PropertyName="pageSize")]
    public int PageSize { get; set; }
    [JsonProperty(PropertyName="orderBy")]
    public string? OrderBy { get; set; }
    [JsonProperty(PropertyName="orderDesc")]
    public Boolean? OrderDesc { get; set; }
}