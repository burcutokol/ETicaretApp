using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using ETicaretAPI.Persistence.Contexts;
using Microsoft.Extensions.Configuration;

namespace ETicaretAPI.Persistence
{
    public class DesignTimeDbContextFactory : IDesignTimeDbContextFactory<ETicaretAPIDbContext>
    {
        public ETicaretAPIDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<ETicaretAPIDbContext>();
            optionsBuilder.UseNpgsql(Configuration.ConnectionString);

            return new ETicaretAPIDbContext(optionsBuilder.Options);
        }
    }
}
