using Microsoft.EntityFrameworkCore;
using SwaggerTSGenerator.Models.Demo;
using System;
using System.Collections.Generic;

public class DemoContext : DbContext
{
    public DbSet<Order> Orders { get; set; }

    public DemoContext(){}

    public DemoContext(DbContextOptions<DemoContext> options)
    : base(options){}
}
