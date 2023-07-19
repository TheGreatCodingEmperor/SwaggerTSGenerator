using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;

namespace SwaggerTSGenerator.Helpers;
public class RepositoryHelper<TEntity>
where TEntity : class
{
    private readonly DbContext _dbContext;
    private IDbContextTransaction _transaction;
    public RepositoryHelper(DbContext context)
    {
        _dbContext = context;
    }
    public void BeginTransaction(){
        _transaction = _dbContext.Database.BeginTransaction();
    }
    public void Commit(){
        if(_transaction != null){
            _transaction.Commit();
        }
    }
    public void Rollback(){
        if(_transaction != null){
            _transaction.Rollback();
        }
    }
    public IQueryable<TEntity> Queryable(){
        return _dbContext.Set<TEntity>().AsQueryable();
    }
    public TEntity? Find(params object?[]? keyValues){
        return _dbContext.Set<TEntity>().Find(keyValues);
    }
    public void Add(TEntity entity)
    {
        _dbContext.Set<TEntity>().Add(entity);
    }
    public void Update(TEntity entity)
    {
        _dbContext.ChangeTracker.Clear();
        _dbContext.Set<TEntity>().Update(entity);
    }
    public void Remove(TEntity entity)
    {
        _dbContext.Set<TEntity>().Remove(entity);
    }
    public void SaveChange(){
        _dbContext.SaveChanges();
    }
}