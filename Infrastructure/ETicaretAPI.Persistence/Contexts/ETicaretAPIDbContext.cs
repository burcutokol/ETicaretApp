using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ETicaretAPI.Domain.Entities;
using ETicaretAPI.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;

namespace ETicaretAPI.Persistence.Contexts
{
    public class ETicaretAPIDbContext : DbContext
    {
        public ETicaretAPIDbContext(DbContextOptions<ETicaretAPIDbContext> options) : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public override Task<int> SaveChangesAsync( CancellationToken cancellationToken = default) //Interceptor
        { //This method will be used common changes on entities.
            var data = ChangeTracker
                .Entries<BaseEntity>(); //It catches changes on entities or newly created entities
            foreach (var d in data)
            {
                //_ = d.State switch // _ discard => We can use no need to assign result to some field
                //{ // It reduces memory usage and increase code readability
                //    case EntityState.Modified
                //        d.Entity.UpdatedDate = DateTime.UtcNow,
                //    EntityState.Added => d.Entity.CreatedDate = DateTime.UtcNow,    
                //};

                switch (d.State)
                {
                    case EntityState.Modified:
                        d.Entity.UpdatedDate = DateTime.UtcNow;
                        break;
                    case EntityState.Added:
                        d.Entity.CreatedDate = DateTime.UtcNow;
                        break;
                        
                }


            }
            
            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
