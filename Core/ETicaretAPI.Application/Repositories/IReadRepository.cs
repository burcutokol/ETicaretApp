using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using ETicaretAPI.Domain.Entities.Common;

namespace ETicaretAPI.Application.Repositories
{
    public interface IReadRepository<T> : IRepository<T> where T : BaseEntity
    {
        IQueryable<T> GetAll(); //It wont fetched all data to memory(difference from INumerable), will be fetched from database
        IQueryable<T> GetWhere(Expression<Func<T, bool>> method); //conditions will be added to db query when we used iquaryable
        //All data wont be fetched in that way.(more efficent than inumerable or list)
        Task<T> GetSingleAsync(Expression<Func<T, bool>> method);//first or default async
        Task <T> GetByIdAsync(string id);
    }
}
