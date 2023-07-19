using System.ComponentModel.DataAnnotations;

namespace SwaggerTSGenerator.Models.Demo;
public class Order{
    [Key]
    public int Id {get;set;}
    public string Name {get;set;}
    public int Price {get;set;}
    public string Count {get;set;}
}