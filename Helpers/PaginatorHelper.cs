
namespace SwaggerTSGenerator.Helpers;
public class PaginatorHelper{
    public static (int count,List<T> list) GetPage<T>(IQueryable<T> queryable,int page,int pageSize){
        int count  = queryable.Count();
        if(page == -1 && pageSize ==-1){
            return (count,queryable.ToList());
        }
        else{
            if(page<1){
                throw new Exception("Page Cant Lower Than 1");
            }
            if(pageSize<1){
                throw new Exception("PageSize Cant Lower Than 1");
            }
            return (count,queryable.Skip((page-1)*pageSize).Take(pageSize).ToList());
        }
    }
}