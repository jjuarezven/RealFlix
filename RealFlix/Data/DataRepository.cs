using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace RealFlix.Data
{
    public class DataRepository<T> : IDataRepository<T> where T : class
    {
        private readonly RealFlixContext _context;

        public DataRepository(RealFlixContext context)
        {
            _context = context;
        }

        public void Add(T entity)
        {
            _context.Set<T>().Add(entity);
        }

        public void Update(T entity)
        {
            _context.Set<T>().Update(entity);
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
        }

        public async Task<T> SaveAsync(T entity)
        {
            await _context.SaveChangesAsync();
            return entity;
        }

        //public IEnumerable<T> Find(Expression<Func<T, bool>> predicate)
        //{
        //    return _context.Set<T>().Where(predicate);
        //}
    }
}
