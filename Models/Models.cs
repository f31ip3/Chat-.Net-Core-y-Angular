using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiAngular.Models
{
    public class MyDBContext : DbContext
    {
        //creo un constructor y creo las opciones para espesificar que lo que reciva este objeto va ha hacer enviados a su padre que sera la cadena de conección
        public MyDBContext(DbContextOptions<MyDBContext> options):base(options)
        {

        }
        //vasmos a indicarle que esta tabla pertenese a esta base de datos( public MyDBContext(DbContextOptions<MyDBContext> options):base(options))
        public DbSet<Message> Message { get; set; }//con el atributo DbSet
    }
}
